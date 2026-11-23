---
layout: distill
title: Portfolio Performance
description: Tool to test the out-of-sample performance of different portfolio optimization strategies.
img: 
importance: 1
bibliography: project-portfolio-optimization.bib
github: https://github.com/sidnand/portfolioperformance
---

## Overview

Portfolio Performance is a Python package for comparing portfolio-allocation strategies out of sample. It applies 11 models—including equal weighting, minimum-variance, mean-variance, and Bayesian strategies—to historical return data, then reports Sharpe ratios and statistical comparisons against a benchmark.

The project has three parts: the [Python package on PyPI](https://pypi.org/project/portfolioperformance/), the interactive [Portfolio Lab]({{ site.url }}/Portfolio-Lab/), and a [companion server](https://github.com/sidnand/Portfolio-Performance-Server). The work is inspired by DeMiguel, Garlappi, and Uppal’s [study of optimal versus naive diversification](https://doi.org/10.1093/rfs/hhm075).

## Models

We will let:

- $$n$$ be the number of assets in the portfolio
- $$r$$ be the expected returns of the assets
- $$C$$ be the covariance matrix of the assets
- $$w$$ be the weights of the assets in the portfolio
- $$r_p$$ be the expected return of the portfolio
- $$r_f$$ be the risk free rate
- $$\sigma_p$$ be the standard deviation of the portfolio

### Equal Weighted (Benchmark)

This is the simplest model, it assigns equal weight to all the assets in the portfolio.

$$
w = \frac{1}{n}
$$

### Minimum Variance

This model seeks to minimize the variance of the portfolio, focusing on reducing risk without considering expected returns. This approach aims to find the portfolio that achieves the lowest risk (variance) while maintaining full investment (i.e., the sum of the weights equals 1). <d-cite key="markowitz1952portfolio"></d-cite> The optimization problem is formulated as:

$$
\min \quad w^T C w
$$

subject to:

$$
w^T \mathbf{1} = 1
$$

where:

- $$w$$ is the vector of portfolio weights,
- $$C$$ is the covariance matrix of asset returns,
- $$\mathbf{1}$$ is a vector of ones, ensuring that the portfolio weights sum to 1.

### Minimum-variance with short-sale constraints

This version minimizes portfolio variance while restricting each weight to the interval from zero to one, so the portfolio is fully invested and cannot take short positions:

$$
\mathbf{1}^{T}w = 1,\qquad 0 \leq w_i \leq 1.
$$

### Jagannathan–Ma constrained minimum variance

The Jagannathan–Ma implementation also minimizes variance under a full-investment constraint, with an additional lower bound of \(1/(2n)\) on each asset weight. This keeps every weight within the prescribed bounds rather than allowing unrestricted short positions.

### Kan Zhou equal-weighted model

This covariance-based estimator blends equal weights with a minimum-variance allocation. The blend depends on the estimated covariance matrix and sample size, giving a data-adjusted alternative to the naive equal-weight benchmark.

### Mean-variance (Markowitz) model

The mean-variance optimization model seeks to maximize the return of a portfolio for a given level of risk, balancing expected returns and the variance of portfolio returns. <d-cite key="markowitz1952portfolio"></d-cite> This framework is central to portfolio theory, where the investor aims to select a portfolio that maximizes return while minimizing risk.

The optimization problem is formulated as:

$$
\max \quad w^T r - \lambda w^T C w
$$

subject to:

$$
w^T \mathbf{1} = 1
$$

where:

- $$w$$ is the vector of portfolio weights,
- $$r$$ is the vector of expected returns,
- $$C$$ is the covariance matrix of asset returns,
- $$\lambda$$ is a risk-aversion parameter that controls the trade-off between risk and return,
- $$\mathbf{1}$$ is a vector of ones, ensuring that portfolio weights sum to 1.

This model allows investors to choose an optimal portfolio based on their risk preferences, adjusting the weight of each asset to achieve the desired return-risk trade-off.

### Mean-variance with short-sale constraints

This is the long-only version of the mean-variance objective above. It keeps the full-investment constraint and restricts each asset weight to \(0 \leq w_i \leq 1\), preventing short positions while retaining the risk-aversion parameter.

### Kan Zhou (2007) three-fund model

The Kan–Zhou model adjusts mean-variance allocation for uncertainty in estimated returns. In this implementation, the risk-aversion parameter controls a combination of the estimated tangency-portfolio direction and the global minimum-variance direction. <d-cite key="kan2007optimal"></d-cite>

### Bayes-Stein

The Bayes–Stein model replaces raw sample estimates with shrinkage-adjusted estimates of expected returns and covariance, then uses them in a mean-variance allocation. This is intended to reduce the effect of estimation error in portfolio inputs.

### Bayes-Stein with shortsale constraints

This applies the same Bayes–Stein estimates as the unconstrained version, while restricting weights to be nonnegative and sum to one. The resulting portfolio uses shrinkage-adjusted inputs without taking short positions.

### MacKinlay and Pastor’s (2000)

MacKinlay and Pastor’s work on asset pricing models examines the relationship between theoretical models and their application to portfolio optimization and expected returns <d-cite key="mackinlay1999asset"></d-cite>. They highlight the significant challenges posed by estimation risk—the uncertainty in predicting parameters such as expected returns and covariances. Their approach integrates Bayesian methods into portfolio optimization to account for these uncertainties, ensuring more robust decision-making compared to traditional approaches that rely solely on historical data.

The foundation of their analysis lies in the **mean-variance optimization framework** proposed by Markowitz, expressed mathematically as:

$$
\min_w \ w^\top \Sigma w
$$

subject to:

$$
w^\top \mu = \mu_p \quad \text{and} \quad w^\top \mathbf{1} = 1
$$

where:

- $$w$$ represents the portfolio weights,
- $$\Sigma$$ is the covariance matrix of asset returns,
- $$\mu$$ is the vector of expected returns,
- $$\mu_p$$ is the target portfolio return,
- $$\mathbf{1}$$ is a vector of ones to ensure portfolio weights sum to 1.

MacKinlay and Pastor extend this model by incorporating **Bayesian techniques**. They introduce prior distributions for parameters like $$\mu$$ and $$\Sigma$$, which are then updated using observed data to generate posterior distributions. These posterior estimates are used in the optimization process, mitigating the risks of overfitting to historical returns. This Bayesian adjustment is particularly impactful for improving out-of-sample portfolio performance.

A key innovation in their work is the concept of **shrinkage** towards a benchmark, such as the market portfolio. By blending the model’s estimates with the benchmark’s characteristics, they reduce the impact of estimation errors, offering a practical solution to the challenges of real-world portfolio management.

## Statistics

To compare the performance of different models, we use the Sharpe ratio, which measures the risk-adjusted return of a portfolio. This ratio allows for the evaluation of portfolio returns relative to the amount of risk taken, with higher values indicating better risk-adjusted performance. It is defined as:

$$
\text{Sharpe Ratio} = \frac{r_p - r_f}{\sigma_p}
$$

where:

- $$r_p$$ is the return of the portfolio,
- $$r_f$$ is the risk-free rate,
- $$\sigma_p$$ is the standard deviation of the portfolio's returns (a measure of risk).

## Shapre Ratio Statistical Significance

To assess the statistical significance of the Sharpe ratio, we use the Jobson-Korkie Z test <d-cite key="jobson1980estimation"></d-cite>. The null hypothesis is that the Sharpe ratio is zero (indicating no risk-adjusted return), while the alternative hypothesis posits that the Sharpe ratio is non-zero. This test evaluates whether the observed Sharpe ratio is significantly different from zero, helping determine if the portfolio's risk-adjusted performance is statistically meaningful. The test statistic is given by:

$$
Z = \frac{\hat{SR}}{\sqrt{\frac{1}{T}}}
$$

where:
- $$\hat{SR}$$ is the sample Sharpe ratio,
- $$T$$ is the number of observations (or time periods).
