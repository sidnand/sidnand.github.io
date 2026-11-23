---
layout: page
title: Market Insights Terminal
description: A command-line tool for searching and downloading U.S. stock and economic data.
importance: 6
github: https://github.com/sidnand/Market-Insights-Terminal
---

## Overview

Market Insights Terminal is a command-line utility for finding and downloading U.S. financial data. It separates stock-ticker queries from economic-series queries, and supports annual, quarterly, and stock-level downloads.

For example, search for a ticker and download its annual data:

```bash
python main.py search --category ticker --country usa AAPL
python main.py download --category ticker --country usa AAPL --annual
```

Economic-series downloads use FRED identifiers and require a FRED API key in the local configuration. See the [README for configuration and commands](https://github.com/sidnand/Market-Insights-Terminal#readme) or browse the [source code](https://github.com/sidnand/Market-Insights-Terminal).
