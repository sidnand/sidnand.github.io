---
layout: distill
title: Portfolio Performance
description: Tool to test the out-of-sample performance of different portfolio optimization strategies.
img: 
importance: 1
bibliography: project-portfolio-optimization.bib
---

**Still under construction...**

This project comprises of three part, a Python package, a GUI and a web server. The package is the core of the project, it contains the functions to optimize the portfolio and to test the out-of-sample performance of the portfolio. The GUI is a simple interface to interact with the package, and the web server is a locally run api which fetches the latest data from the internet and runs the optimization and performance test.

Based on the paper: Optimal Versus Naive Diversification <d-cite key="demiguel2009optimal"></d-cite>. You can check out the PyPi page [here](https://pypi.org/project/portfolioperformance/).

The GUI is available at [sidnand.github.io/Portfolio-Lab/]({{ site.url }}/Portfolio-Lab/).

The web server is available on [GitHub](https://github.com/sidnand/Portfolio-Performance-Server).

This project was went to turn the original research paper into a general purpose application that could be used by finance hobbiests and researchers alike. It includes 11 pre-built models and for the tech savvy, the ability to create their own models. The models included are talked about below.

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

### Minimum-varaince with shortsale constraints

### Minimum-varaince with generalized constraints (Jagannathan Ma)

### Kan Zhou equal weighted model

### Mean-varaince (Markowitz) model

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

### Mean-variance with shortsale constraints

### Kan Zhou (2007) "three-fund" model

### Bayes-Stein

### Bayes-Stein with shortsale constraints

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
