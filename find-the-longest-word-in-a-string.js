function findLongestWordLength(str) {
  let wordArray = str.split(" ");
  let longestWord = wordArray[0];
  for (let i = 0; i < wordArray.length; i++) {
    if (longestWord.length <= wordArray[i].length) {
      longestWord = wordArray[i]
    }
  }
  return longestWord.length;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
