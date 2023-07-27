function isPalindrome(word) {
  // 1. Remove any non-alphanumeric characters from the input word and convert it to lowercase.
  // 2. Initialize two pointers: left pointer at the beginning of the cleaned word and right pointer at the end of the cleaned word.
  // 3. While the left pointer is less than or equal to the right pointer:
  //    a. If the characters at the left and right pointers are not the same, return false (not a palindrome).
  //    b. Move the left pointer to the right and the right pointer to the left to compare the next pair of characters.
  // 4. If the loop completes without returning false, the word is a palindrome, so return true.

  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = cleanedWord.length - 1;

  while (left <= right) {
    if (cleanedWord[left] !== cleanedWord[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/*
  Explanation of the solution:
  The function `isPalindrome` takes a word as input and determines whether the word is a palindrome or not. To check if a word is a palindrome, we need to compare its characters from the beginning and the end of the word inward.

  The solution starts by cleaning the input word by removing any non-alphanumeric characters and converting it to lowercase. Then, it initializes two pointers: `left` at the beginning of the cleaned word and `right` at the end of the cleaned word.

  The function uses a loop that continues as long as the `left` pointer is less than or equal to the `right` pointer. In each iteration, it compares the characters at the `left` and `right` pointers. If they are not the same, the function immediately returns `false`, indicating that the word is not a palindrome.

  If the loop completes without finding any mismatch, it means that the word is a palindrome, and the function returns `true`.

  The function handles both even and odd-length palindromes, as the comparison continues until the pointers meet at the center of the word.
*/

// Custom Tests
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;
