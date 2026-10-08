// The contributor's account on the site: sign in or up with a code sent by e-mail, the machines of
// the account, an enrollment code for a new machine. It talks to the grid's contributor API
// (/contributor/v1, served under this site's own address by its proxy: no cross-site request).
// The session is kept in localStorage; every text shown comes from the page (no HTML from the
// server is ever inserted: DOM nodes and textContent only).
(function () {
  "use strict";
  var box = document.getElementById("account");
  if (!box) return;
  var T = JSON.parse(document.getElementById("account-texts").textContent);
  var API = box.getAttribute("data-api");
  var KEY = "gg-contributor";
  var state = { step: "email", email: "", error: "", note: "" };
  var first = true; // no focus jump when the page opens

  function fill(s, values) {
    return s.replace(/\{(\w+)\}/g, function (_, k) { return values[k] != null ? values[k] : ""; });
  }
  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") e.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }
  function session() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || "null");
      if (s && s.session && s.expires > Date.now()) return s;
    } catch (e) {}
    return null;
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
  function forget() { try { localStorage.removeItem(KEY); } catch (e) {} }

  // A call to the API; rejects with an Error whose message is already in the visitor's language.
  function call(method, path, body, token) {
    var headers = { "Accept": "application/json" };
    if (body) headers["Content-Type"] = "application/json";
    if (token) headers["Authorization"] = "Bearer " + token;
    return fetch(API + path, { method: method, headers: headers, body: body ? JSON.stringify(body) : undefined, credentials: "omit" })
      .catch(function () { throw new Error(T.err_unreachable); })
      .then(function (r) {
        return r.text().then(function (text) {
          var data = {};
          try { data = text ? JSON.parse(text) : {}; } catch (e) {}
          if (r.ok) return data;
          var msg = (data && data.message) || "";
          function fail(text) { var e = new Error(text); e.status = r.status; e.server = msg; throw e; }
          if (r.status === 401) { forget(); fail(T.err_signed_out); }
          if (r.status === 403 && msg.indexOf("domain") >= 0) fail(T.err_domain);
          if (r.status === 422 && path.indexOf("/research/") === 0) fail(T.err_request);
          if (r.status === 403 && msg.indexOf("code is wrong") >= 0) fail(T.err_wrong_code);
          if (r.status === 404 && msg.indexOf("not open") >= 0) fail(T.err_closed);
          if (r.status === 422) fail(T.err_invalid_email);
          if (r.status >= 500 || r.status === 404) fail(T.err_unreachable);
          fail(fill(T.err_generic, { why: msg || r.status }));
        });
      });
  }

  function message() {
    if (state.error) return el("p", { class: "error", role: "alert", text: state.error });
    if (state.note) return el("p", { class: "note", text: state.note });
    return null;
  }
  function busy(button, on) { button.disabled = on; }

  function emailView() {
    var input = el("input", { type: "email", id: "acc-email", autocomplete: "email", required: "required", maxlength: "254", placeholder: T.acc_email_placeholder });
    input.value = state.email;
    var send = el("button", { class: "btn", type: "submit", text: T.acc_send });
    var form = el("form", { novalidate: "novalidate", onsubmit: function (e) {
      e.preventDefault();
      var email = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@.]+$/.test(email)) { state.error = T.err_invalid_email; render(); return; }
      busy(send, true);
      call("POST", "/code", { email: email }).then(function (d) {
        state = { step: "code", email: d.email || email.toLowerCase(), error: "", note: "" };
        render();
      }, function (err) { state.error = err.message; state.email = email; render(); });
    } }, [
      el("h2", { text: T.acc_title }),
      el("p", { class: "muted", text: T.acc_intro }),
      el("label", { for: "acc-email", text: T.acc_email_label }), input,
      message(),
      el("div", { class: "actions" }, [send])
    ]);
    return [form, input];
  }

  function codeView() {
    var input = el("input", { type: "text", id: "acc-code", class: "code", inputmode: "numeric", autocomplete: "one-time-code", maxlength: "8", pattern: "[0-9]{8}", placeholder: "12345678" });
    var go = el("button", { class: "btn", type: "submit", text: T.acc_continue });
    var form = el("form", { novalidate: "novalidate", onsubmit: function (e) {
      e.preventDefault();
      var code = input.value.replace(/\D/g, "");
      if (code.length !== 8) return;
      busy(go, true);
      call("POST", "/session", { email: state.email, code: code }).then(function (d) {
        save({ session: d.session, email: d.email, expires: Date.now() + (d.expires_in_secs || 3600) * 1000 });
        state = { step: "account", email: d.email, error: "", note: "" };
        render();
      }, function (err) { state.error = err.message; state.note = ""; render(); });
    } }, [
      el("h2", { text: T.acc_code_title }),
      el("p", { class: "muted", text: fill(T.acc_code_sent, { email: state.email }) }),
      el("label", { for: "acc-code", text: T.acc_code_label }), input,
      message(),
      el("div", { class: "actions" }, [go]),
      el("div", { class: "links" }, [
        el("button", { type: "button", text: T.acc_other, onclick: function () { state = { step: "email", email: state.email, error: "", note: "" }; render(); } }),
        el("button", { type: "button", text: T.acc_resend, onclick: function () {
          call("POST", "/code", { email: state.email }).then(function () { state.error = ""; state.note = T.acc_resent; render(); },
            function (err) { state.error = err.message; render(); });
        } })
      ])
    ]);
    input.addEventListener("input", function () { input.value = input.value.replace(/\D/g, "").slice(0, 8); });
    return [form, input];
  }

  function accountView(s) {
    var wrap = el("div", {});
    var out = el("button", { class: "btn btn-ghost btn-small", type: "button", text: T.acc_signout, onclick: function () {
      call("POST", "/logout", null, s.session).catch(function () {});
      forget(); state = { step: "email", email: s.email, error: "", note: "" }; render();
    } });
    wrap.appendChild(el("div", { class: "who" }, [el("strong", { text: fill(T.acc_signed_as, { email: s.email }) }), out]));
    var list = el("div", {}, [el("p", { class: "muted", text: "…" })]);
    wrap.appendChild(el("h2", { text: T.acc_machines }));
    wrap.appendChild(list);
    call("GET", "/me", null, s.session).then(function (me) {
      list.textContent = "";
      if (me.suspended) list.appendChild(el("p", { class: "error", text: fill(T.acc_suspended, { why: me.suspended_reason || "" }) }));
      if (!me.machines || !me.machines.length) { list.appendChild(el("p", { class: "muted", text: T.acc_no_machines })); return; }
      var body = el("tbody", {});
      me.machines.forEach(function (m) {
        body.appendChild(el("tr", {}, [
          el("td", { text: m.name }),
          el("td", {}, [el("span", { class: m.working ? "state-on" : "muted", text: m.working ? T.acc_working : T.acc_stopped })]),
          el("td", { text: String(m.accepted) })
        ]));
      });
      list.appendChild(el("table", {}, [el("thead", {}, [el("tr", {}, [el("th", { text: T.acc_col_name }), el("th", { text: T.acc_col_state }), el("th", { text: T.acc_col_accepted })])]), body]));
    }, function (err) {
      if (!session()) { state = { step: "email", email: s.email, error: err.message, note: "" }; render(); return; }
      list.textContent = ""; list.appendChild(el("p", { class: "error", text: err.message }));
    });
    var codeArea = el("div", {});
    var make = el("button", { class: "btn btn-ghost", type: "button", text: T.acc_new_code, onclick: function () {
      busy(make, true);
      call("POST", "/enrollment", null, s.session).then(function (d) {
        codeArea.textContent = "";
        var pre = el("pre", { text: d.install_command || d.enrollment_token });
        var copy = el("button", { class: "btn btn-small", type: "button", text: T.acc_copy, onclick: function () {
          (navigator.clipboard ? navigator.clipboard.writeText(pre.textContent) : Promise.reject()).then(function () { copy.textContent = T.acc_copied; }, function () {});
        } });
        codeArea.appendChild(el("p", { class: "muted small", text: T.acc_code_once }));
        codeArea.appendChild(el("p", { text: T.acc_install_cmd }));
        codeArea.appendChild(pre);
        codeArea.appendChild(copy);
      }, function (err) { busy(make, false); codeArea.textContent = ""; codeArea.appendChild(el("p", { class: "error", text: err.message })); });
    } });
    wrap.appendChild(el("h2", { text: T.acc_add }));
    wrap.appendChild(el("p", {}, [document.createTextNode(T.acc_add_app + " "), el("a", { href: T.download_url, text: T.nav_download + " →" })]));
    wrap.appendChild(el("p", { class: "muted", text: T.acc_add_manual }));
    wrap.appendChild(make);
    wrap.appendChild(codeArea);
    wrap.appendChild(researchView(s));
    return [wrap, null];
  }

  // The same account's researcher side: a request reviewed by a person, then projects and tokens.
  var STATE = { active: "state_active", suspended: "state_suspended", closed: "state_closed" };
  var ROLE = { owner: "role_owner", member: "role_member", viewer: "role_viewer" };
  function researchView(s) {
    var box = el("section", { class: "research", id: "research" }, [el("h2", { text: T.res_title }), el("p", { class: "muted", text: "…" })]);
    function show(children) {
      box.textContent = "";
      box.appendChild(el("h2", { text: T.res_title }));
      children.forEach(function (c) { if (c) box.appendChild(c); });
    }
    function requestForm(error) {
      var name = el("input", { type: "text", id: "res-name", maxlength: "100", autocomplete: "name" });
      var lab = el("input", { type: "text", id: "res-lab", maxlength: "200", autocomplete: "organization" });
      var purpose = el("textarea", { id: "res-purpose", maxlength: "2000", rows: "4" });
      var send = el("button", { class: "btn", type: "submit", text: T.res_send });
      var form = el("form", { novalidate: "novalidate", onsubmit: function (e) {
        e.preventDefault();
        send.disabled = true;
        call("POST", "/research/request", { name: name.value, lab: lab.value, purpose: purpose.value }, s.session)
          .then(load, function (err) { send.disabled = false; show([el("p", { class: "muted", text: T.res_intro }), el("p", { class: "error", role: "alert", text: err.message }), form]); });
      } }, [
        el("label", { for: "res-name", text: T.res_name }), name,
        el("label", { for: "res-lab", text: T.res_lab }), lab,
        el("label", { for: "res-purpose", text: T.res_purpose }), purpose,
        el("p", { class: "muted small", text: T.res_purpose_hint }),
        el("div", { class: "actions" }, [send])
      ]);
      show([el("p", { class: "muted", text: T.res_intro }), error ? el("p", { class: "error", text: error }) : null, form]);
    }
    function approved(r) {
      var list;
      if (!r.projects || !r.projects.length) {
        list = el("p", { class: "muted", text: T.res_no_projects });
      } else {
        var body = el("tbody", {});
        r.projects.forEach(function (p) {
          body.appendChild(el("tr", {}, [
            el("td", { text: p.name }),
            el("td", { text: T[STATE[p.state]] || p.state }),
            el("td", { text: T[ROLE[p.role]] || p.role }),
            el("td", { text: p.available + " / " + p.reserved + " / " + p.spent })
          ]));
        });
        list = el("table", {}, [el("thead", {}, [el("tr", {}, [el("th", { text: T.res_col_project }), el("th", { text: T.acc_col_state }), el("th", { text: "" }), el("th", { text: T.res_col_credits })])]), body]);
      }
      var area = el("div", {});
      var make = el("button", { class: "btn btn-ghost", type: "button", text: T.res_token, onclick: function () {
        make.disabled = true;
        call("POST", "/research/token", null, s.session).then(function (d) {
          area.textContent = "";
          var cmd = "gg auth login --server " + d.server + " --token " + d.token + "\n\nexport GG_SERVER=" + d.server + "\nexport GG_TOKEN=" + d.token;
          var pre = el("pre", { text: cmd });
          var copy = el("button", { class: "btn btn-small", type: "button", text: T.acc_copy, onclick: function () {
            (navigator.clipboard ? navigator.clipboard.writeText(pre.textContent) : Promise.reject()).then(function () { copy.textContent = T.acc_copied; }, function () {});
          } });
          area.appendChild(el("p", { class: "muted small", text: T.res_token_once }));
          area.appendChild(el("p", { text: T.res_token_use }));
          area.appendChild(pre);
          area.appendChild(copy);
        }, function (err) { make.disabled = false; area.textContent = ""; area.appendChild(el("p", { class: "error", text: err.message })); });
      } });
      show([el("p", { class: "state-on", text: T.res_approved }), el("h3", { text: T.res_projects }), list, make, area]);
    }
    function load() {
      call("GET", "/research", null, s.session).then(function (r) {
        if (r.status === "none") requestForm();
        else if (r.status === "approved") approved(r);
        else if (r.status === "pending") show([el("p", { class: "note", text: T.res_pending })]);
        else if (r.status === "suspended") show([el("p", { class: "error", text: T.res_suspended })]);
        else show([el("p", { class: "error", text: T.res_rejected })]);
      }, function (err) { show([el("p", { class: "error", text: err.message })]); });
    }
    load();
    return box;
  }

  function render() {
    var s = session();
    if (s && state.step !== "account") state = { step: "account", email: s.email, error: "", note: "" };
    if (!s && state.step === "account") state.step = "email";
    var view = state.step === "account" ? accountView(s) : state.step === "code" ? codeView() : emailView();
    box.textContent = "";
    box.appendChild(view[0]);
    if (view[1] && !first) view[1].focus();
    first = false;
  }
  render();
})();
