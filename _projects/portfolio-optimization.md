---
layout: distill
title: Portfolio Performance
description: Tool to test the out-of-sample performance of different portfolio optimization strategy
img: 
importance: 1
# category: work
bibliography: project-portfolio-optimization.bib
---

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

This model minimizes the variance of the portfolio.

$$
min \quad w^TCw
$$

such that:

$$
w^T1 = 1
$$

### Minimum-varaince with shortsale constraints

### Minimum-varaince with generalized constraints (Jagannathan Ma)

### Kan Zhou equal weighted model

### Mean-varaince (Markowitz) model

This model maximizes the return of the portfolio for a given level of risk. <d-cite key="markowitz1952portfolio"></d-cite>

$$
max \quad w^Tr - \lambda w^TCw
$$

such that:

$$
w^T1 = 1
$$

### Mean-variance with shortsale constraints

### Kan Zhou (2007) "three-fund"

### Bayes-Stein

### Bayes-Stein with shortsale constraints

### MacKinlay and Pastor’s (2000)

## Statistics

To compare the performance of the different models, we use the Sharpe ratio, which is the risk adjusted return of the portfolio. Defined as:

$$
\frac{r_p - r_f}{\sigma_p}
$$

## Shapre Ratio Statistical Significance

To test the statistical significance of the Sharpe ratio, we use the Jobson Korkie Z test <d-cite key="jobson1980estimation"></d-cite> . The null hypothesis is that the Sharpe ratio is zero, and the alternative hypothesis is that the Sharpe ratio is not zero. The test statistic is:

$$
Z = \frac{\hat{SR}}{\sqrt{\frac{1}{T}}}
$$

Where:

- $$\hat{SR}$$ is the sample Sharpe ratio
- $$T$$ is the number of observations
