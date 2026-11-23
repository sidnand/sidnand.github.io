---
layout: page
title: "Option Pricing and Visualizer"
description: Python package for pricing options with binomial and Black–Scholes–Merton models, and analyzing option strategies.
img: 
importance: 2
github: https://github.com/sidnand/OptionQuant
# category: work
related_publications: false
---

## Overview

OptionQuant is a Python package for working with individual options and multi-leg strategies. Its `Option` class calculates profit and loss across underlying prices, while `OptionStrategy` combines positions and plots the resulting strategy payoff.

For pricing, `OptionPricer` currently includes binomial and Black–Scholes–Merton models. Install the package with `pip install OptionQuant`, then create an option and price it:

```python
import OptionQuant as oq

option = oq.Option("put", 140, 141, 8.15, 2, 1.07, 0.75, True)
price = oq.OptionPricer.binomial_model(option, risk_free_rate=0.04)
```

See the package on [PyPI](https://pypi.org/project/OptionQuant/) or browse the [source code](https://github.com/sidnand/OptionQuant).
