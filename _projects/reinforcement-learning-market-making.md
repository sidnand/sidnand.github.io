---
layout: page
title: Reinforcement Learning for Market Making
description: Experiments comparing loss functions for reinforcement-learning market-making systems.
importance: 7
github: https://github.com/sidnand/Reinforcement-Learning-for-Market-Making
---

## Overview

This project studies how reward design affects a reinforcement-learning market maker. A policy chooses bid and ask prices in a simulated market, where each action changes cash and inventory.

The experiments compare a profit-only objective with one that also penalizes low cash and excess inventory. The repository includes plots comparing episode rewards, cumulative rewards, episode lengths, and bid–ask spreads for the two approaches.

View the [reward comparison](https://github.com/sidnand/Reinforcement-Learning-for-Market-Making/blob/main/reward.pdf), [cumulative rewards](https://github.com/sidnand/Reinforcement-Learning-for-Market-Making/blob/main/cumulative_reward.pdf), and [bid--ask spread plots](https://github.com/sidnand/Reinforcement-Learning-for-Market-Making/blob/main/ask_bid_spread_over_time.pdf).

Explore the [training code](https://github.com/sidnand/Reinforcement-Learning-for-Market-Making/blob/main/main.py), the [market environment](https://github.com/sidnand/Reinforcement-Learning-for-Market-Making/tree/main/environments), and the [complete repository](https://github.com/sidnand/Reinforcement-Learning-for-Market-Making).
