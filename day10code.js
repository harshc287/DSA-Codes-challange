function groupAnagrams(strs) {
    const groups = new Map();
    
    for (let word of strs) {
        const sortedWord = word.split('').sort().join('');
       
        if (groups.has(sortedWord)) {
            groups.get(sortedWord).push(word);

        } else {
            groups.set(sortedWord, [word]);
        }
    }
    
    return Array.from(groups.values());
    
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx", "yxz"]));