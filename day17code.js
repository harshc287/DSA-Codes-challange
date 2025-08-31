function primeFactorization(N) {
    const factors = [];
    let n = N;

    console.log("Starting with:", n);

    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
        console.log("Divided by 2 →", "n =", n, "factors =", factors);
    }

    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
            console.log(`Divided by ${i} → n =`, n, "factors =", factors);
        }
    }

    if (n > 2) {
        factors.push(n);
        console.log("Remaining prime →", n);
    }

    return factors;
}
console.log(primeFactorization(20))
console.log("------------------------------------------")
console.log(primeFactorization(45))
console.log("------------------------------------------")
console.log(primeFactorization(234))
console.log("------------------------------------------")
console.log(primeFactorization(255))
console.log("------------------------------------------")
console.log(primeFactorization(2342))