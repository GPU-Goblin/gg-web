+++
title = "For researchers: larger scientific computations"
description = "Use GPU Goblin's computing network of lent computers for your scientific computations: large matrix products, tensor-operation graphs, model training. Large computations split automatically, verified results."
template = "page.html"
[extra]
lead = "Use GPU Goblin's computing network to run your computations from Python. Large computations are split automatically across computers lent by volunteers, and every result is checked."
cta = "Request access"
cta_page = "account"
cta2 = "Read the FAQ"
cta2_page = "faq"
toc = true
+++

## What you can compute

GPU Goblin computes the kinds of scientific computation in its catalog, on processors and graphics
cards:

- **Large matrix products**, the core of much of scientific computing, split into pieces when they
  are too large for one machine.
- **Computations on graphs of tensor operations**: a computation described as a graph of more than
  45 operators (arithmetic, reductions, integer tensors, custom formulas…), for example captured
  from a PyTorch program by the Python package.
- **Training of machine-learning models**: convolutional networks, transformers, language models.
  A model larger than any single contributor's machine is cut automatically into stages (groups of
  layers computed one after another), tiles (large matrices split into pieces) and micro-batches.

You describe the computation, and the grid computes it with its own verified operations. Other kinds of computation are added to the catalog over time: tell us what
your research needs.

## How a computation runs

1. Your lab's **node**, a small service installed at your lab, holds the data and cuts the
   computation into tasks.
2. Contributors' machines fetch their inputs, compute, and hand back their results.
3. Every result is **verified** — recomputed by an independent validator, or compared with the
   same computation made by another contributor — before it is used.
4. The accepted results are combined into yours. For a model being trained, this is one round:
   the gradients are combined, the optimizer takes its step, and the next round starts.

## Your data

- By default, the server stores **no research data**, and the node at your lab never sends out your datasets as they are: it sends the machines **operations to compute**, with only the numbers each task needs.
- These numbers arrive with no file name and no description of what they represent (text arrives
  as numeric tokens). The data is not encrypted during the computation: an array of pixels can still be shown as an image, and tokens
  can be turned back into text. Do not send data that must stay confidential (personal or medical
  data, for example) to the open grid.

## Access

[Request access from your account](../account): sign in with your e-mail address and fill in the researcher access request. Questions: [contact@gpugoblin.com](mailto:contact@gpugoblin.com).

## Cost

Using the grid for research is **free**. The software is available under the PolyForm
Noncommercial license: free for research and any noncommercial use. Commercial use needs an
agreement with the author.
