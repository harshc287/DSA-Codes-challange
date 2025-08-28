function countSubstringsWithKDistinct(s, k) {

  if (k <= 0) return 0;          
  if (k > s.length) return 0;    
  return atMostKDistinct(s, k) - atMostKDistinct(s, k - 1);
}

function atMostKDistinct(s, k) {
  if (k < 0) return 0;          

  let left = 0;                 
  let ans = 0;                   
  const freq = new Map();        
  let distinct = 0;              

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];                 
    const prevCount = freq.get(ch) || 0; 
    if (prevCount === 0) distinct++;     
    freq.set(ch, prevCount + 1);         
    
    while (distinct > k) {
      const leftChar = s[left];
      const leftCount = freq.get(leftChar);
      if (leftCount === 1) {
        freq.delete(leftChar);           
        distinct--;
      } else {
        freq.set(leftChar, leftCount - 1);
      }
      left++;                          
    }
    ans += right - left + 1;
  }

  return ans;
}

const tests = [
  { s: "pqpqs", k: 2, want: 7 },
  { s: "aabacbebebe", k: 3, want: 10 },
  { s: "a", k: 1, want: 1 },
  { s: "abc", k: 3, want: 1 },
  { s: "abc", k: 2, want: 2 },
];

for (const { s, k, want } of tests) {
  const got = countSubstringsWithKDistinct(s, k);
  console.log(`s="${s}", k=${k} -> ${got} ${want !== undefined ? `(expected ${want})` : ""}`);
}