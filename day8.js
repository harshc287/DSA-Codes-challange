function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
}

let testCases = [
    "the sky is blue",
    "  hello world  ",
    "a good   example"
];

testCases.forEach((test, index) => {
    let result = reverseWords(test);
    console.log(`Index no:- ${index}:`)
    console.log(`Example ${index + 1}:`);
    console.log(`Input: "${test}"`);
    console.log(`Output: "${result}"`);
    console.log();
});