function findZeroSumSubarrays(arr) {
    const n = arr.length;
    const result = [];
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            if (sum === 0) {
                result.push([i, j]);
            }
        }
    }
    
    return result;
}

const arr = [1, 2, -3, 3, -1, 2];
console.log(findZeroSumSubarrays(arr));