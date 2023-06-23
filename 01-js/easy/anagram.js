/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // Convert both strings to lowercase
  const normalizedStr1 = str1.toLowerCase();
  const normalizedStr2 = str2.toLowerCase();

  // Sort the characters in both strings
  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
