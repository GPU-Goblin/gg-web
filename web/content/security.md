+++
title = "Security and trust"
description = "How GPU Goblin protects contributors' machines and researchers' results: no foreign code, sandboxed tasks, verified results, and what it does not protect."
template = "page.html"
[extra]
lead = "How GPU Goblin protects your machine and checks results, and what is not protected."
toc = true
+++

## On your computer

- **No foreign code.** The software only runs GPU Goblin's own computation code. A task is a
  *description* (a model's layers, a batch of data, a size).
- **A sandbox for every task.** {{ <os k="sec_sandbox" lang={lang} win={config.extra.windows_available} /> }}
- **Checked data.** Before computing, the software checks the server's signature when the data arrives. If a piece of data has been modified, the computation is rejected.
- **Local control.** The software can only be controlled from your own machine.

## On the results

- **Computation checks.** Each result is either recomputed by an independent validator
  or computed twice by two different contributors and compared within a measured tolerance.
- **Spot checks.** A share of the results is recomputed a third time, at random, even when two
  contributors agree.

## What is not protected

- **Contributors receive pieces of the data they compute**: arrays of numbers without names or
  descriptions, only what each task needs. The data is not encrypted during the computation: do not send confidential data to
  the open grid.
- **Your public address is visible** to the other machines authorized on the same data when
  sharing between contributors is on (it is, by default, and can be turned off).

## Reporting a problem

Found a security issue? Write to [contact@gpugoblin.com](mailto:contact@gpugoblin.com) before
publishing it.
