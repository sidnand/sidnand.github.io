---
layout: distill
title: Hyperparameter Optimized Latent Topic Model
description: This project introduces a novel topic modeling approach with a custom likelihood function and flexible parameterization. Users can adjust how word frequencies influence topics and the model’s robustness to rare words.
img: 
importance: 3
bibliography: hyperparameter-optimized-latent-topic-model.bib
github: https://github.com/sidnand/Hyperparameter-Optimized-Latent-Topic-Model
---

## Overview

This project explores a Bayesian topic model that represents each document as a mixture of topics and each topic as a distribution over words. Its custom likelihood exposes two controls: `alpha` sets how strongly word counts influence the model, while `beta` smooths word probabilities to reduce zero-probability issues and improve treatment of rare words.

The model is implemented in Stan. The accompanying R Markdown report applies it to financial-news headlines, compares the results with latent Dirichlet allocation (LDA), and checks inference diagnostics.

Read the [project report](https://github.com/sidnand/Hyperparameter-Optimized-Latent-Topic-Model/blob/main/project.pdf), inspect the [Stan model](https://github.com/sidnand/Hyperparameter-Optimized-Latent-Topic-Model/blob/main/model.stan), or browse the [complete repository](https://github.com/sidnand/Hyperparameter-Optimized-Latent-Topic-Model).
