#BlackScholesJS

Black-Scholes fair option price calculator in JS. Greeks included.  
## API

### Setting up Black-Scholes variables
Before even starting to calculate a fair option price, we need to set up the needed variables.
Our variables are held in an instance of `BSHolder`:
- `stock`: underlying's asset price
- `strike`: strike price
- `vola`: volatility (e.g. 0.3 corresponds 30%)
- `interest`: the annualized risk-free interest rate (e.g. 0.05 corresponds 5%)
- `term`:  a time in years (e.g. 0.5 corresponds half-year)
```javascript
var holder = new BSHolder(stock,strike,interest,vola,term);
```

### Calculation
All function regarding calculations are members in `BS`.
Pass an instance of `BSHolder` to a function from `BS`.
E.g.: calculating put price:
```javascript
var put = BS.put(bsholder);
```

### Note of thanks
http://www.math.ucla.edu/~tom/distributions/normal.html for normal distribution calculation snippet.
