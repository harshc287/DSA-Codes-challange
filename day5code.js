
function findLeaders(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }
    
    const n = arr.length;
    const leaders = [];
    
    let maxFromRight = arr[n - 1];
    leaders.push(maxFromRight);
    
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            leaders.push(arr[i]);
            maxFromRight = arr[i];
        }
    }
    
    return leaders.reverse();
}

const arr = [16, 17, 4, 3, 5, 2];
console.log(findLeaders(arr));