self.onmessage = function(e) {
    const result = performComplexCalculation(e.data);
    self.postMessage(result);
};

function performComplexCalculation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}