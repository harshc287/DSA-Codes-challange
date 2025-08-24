function sortColors(arr) {
    if (!arr || arr.length <= 1) {
        return;
    }
    
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    
    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
}

function testSortColors() {
    const testCases = [
        [[0, 1, 2, 1, 0, 2, 1, 0], [0, 0, 0, 1, 1, 1, 2, 2]],
        [[2, 2, 2, 2], [2, 2, 2, 2]],
        [[0, 0, 0, 0], [0, 0, 0, 0]],
        [[1, 1, 1, 1], [1, 1, 1, 1]],
        [[2, 0, 1], [0, 1, 2]],
        [[], []],
        [[1], [1]],
        [[2, 1, 0, 2, 1, 0], [0, 0, 1, 1, 2, 2]]
    ];
    
    console.log("Testing Dutch National Flag Algorithm:");
    console.log("=".repeat(50));
    
    testCases.forEach((testCase, i) => {
        const [inputArr, expected] = testCase;
        const testArr = [...inputArr];
        const original = [...inputArr];
        
        sortColors(testArr);
        
        const status = JSON.stringify(testArr) === JSON.stringify(expected) ? "✅ PASS" : "❌ FAIL";
        console.log(`Test Case ${i + 1}: ${status}`);
        console.log(`  Input:    [${original.join(', ')}]`);
        console.log(`  Output:   [${testArr.join(', ')}]`);
        console.log(`  Expected: [${expected.join(', ')}]`);
        console.log();
    });
}

testSortColors();




// function sortColors(arr) {
//     if (!arr || arr.length <= 1) {
//         return;
//     }
    
//     let low = 0;
//     let mid = 0;
//     let high = arr.length - 1;
    
//     while (mid <= high) {
//         if (arr[mid] === 0) {
//             [arr[low], arr[mid]] = [arr[mid], arr[low]];
//             low++;
//             mid++;
//         } else if (arr[mid] === 1) {
//             mid++;
//         } else {
//             [arr[mid], arr[high]] = [arr[high], arr[mid]];
//             high--;
//         }
//     }
// }

// function testSortColors() {
//     const testCases = [
//         [[0, 1, 2, 1, 0, 2, 1, 0], [0, 0, 0, 1, 1, 1, 2, 2]],
//         [[2, 2, 2, 2], [2, 2, 2, 2]],
//         [[0, 0, 0, 0], [0, 0, 0, 0]],
//         [[1, 1, 1, 1], [1, 1, 1, 1]],
//         [[2, 0, 1], [0, 1, 2]],
//         [[], []],
//         [[1], [1]],
//         [[2, 1, 0, 2, 1, 0], [0, 0, 1, 1, 2, 2]]
//     ];
    
//     console.log("Testing Dutch National Flag Algorithm:");
//     console.log("=".repeat(50));
    
//     testCases.forEach((testCase, index) => {
//         const [inputArr, expected] = testCase;
//         const testArr = [...inputArr];
//         const original = [...inputArr];
        
//         sortColors(testArr);
        
//         const isCorrect = JSON.stringify(testArr) === JSON.stringify(expected);
//         const status = isCorrect ? "✅ PASS" : "❌ FAIL";
        
//         console.log(`Test Case ${index + 1}: ${status}`);
//         console.log(`  Input:    [${original.join(', ')}]`);
//         console.log(`  Output:   [${testArr.join(', ')}]`);
//         console.log(`  Expected: [${expected.join(', ')}]`);
//         console.log();
//     });
// }

// function sortColorsDetailed(arr) {
//     console.log("DETAILED STEP-BY-STEP EXECUTION");
//     console.log("=".repeat(40));
//     console.log(`Initial array: [${arr.join(', ')}]`);
//     console.log();
    
//     if (!arr || arr.length <= 1) {
//         console.log("Array is empty or has 1 element - no sorting needed!");
//         return;
//     }
    
//     let low = 0;
//     let mid = 0;
//     let high = arr.length - 1;
//     let step = 1;
    
//     console.log("Starting algorithm...");
//     console.log(`Initial pointers: low=${low}, mid=${mid}, high=${high}`);
//     console.log();
    
//     while (mid <= high) {
//         console.log(`--- Step ${step} ---`);
//         console.log(`Current state: [${arr.join(', ')}]`);
//         console.log(`Pointers: low=${low}, mid=${mid}, high=${high}`);
//         console.log(`Examining arr[${mid}] = ${arr[mid]}`);
        
//         if (arr[mid] === 0) {
//             console.log(`Found 0 - moving to beginning`);
//             if (low !== mid) {
//                 console.log(`  Swapping arr[${low}] and arr[${mid}] (${arr[low]} ↔ ${arr[mid]})`);
//                 [arr[low], arr[mid]] = [arr[mid], arr[low]];
//                 console.log(`  After swap: [${arr.join(', ')}]`);
//             } else {
//                 console.log(`  Already in correct position`);
//             }
//             low++;
//             mid++;
//             console.log(`  Updated pointers: low=${low}, mid=${mid}`);
            
//         } else if (arr[mid] === 1) {
//             console.log(`Found 1 - correct region, moving forward`);
//             mid++;
//             console.log(`  Updated pointers: mid=${mid}`);
            
//         } else {
//             console.log(`Found 2 - moving to end`);
//             if (mid !== high) {
//                 console.log(`  Swapping arr[${mid}] and arr[${high}] (${arr[mid]} ↔ ${arr[high]})`);
//                 [arr[mid], arr[high]] = [arr[high], arr[mid]];
//                 console.log(`  After swap: [${arr.join(', ')}]`);
//             }
//             high--;
//             console.log(`  Updated pointers: high=${high}`);
//             console.log(`  Note: Not incrementing mid - checking swapped element`);
//         }
        
//         console.log(`End of step ${step}: [${arr.join(', ')}]`);
//         console.log();
//         step++;
//     }
    
//     console.log(`Final sorted array: [${arr.join(', ')}]`);
//     console.log("Algorithm completed!");
// }

// function demonstrateAlgorithm() {
//     console.log("ALGORITHM DEMONSTRATION");
//     console.log("=".repeat(30));
    
//     const demoArray = [0, 1, 2, 1, 0, 2, 1, 0];
//     console.log("Tracing through algorithm:");
//     console.log();
    
//     sortColorsDetailed([...demoArray]);
// }

// function main() {
//     console.log("DUTCH NATIONAL FLAG ALGORITHM - DEMO");
//     console.log("=".repeat(45));
//     console.log();
    
//     testSortColors();
    
//     console.log("\n" + "=".repeat(45));
    
//     demonstrateAlgorithm();
// }