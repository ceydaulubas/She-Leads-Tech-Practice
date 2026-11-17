/**
 * 1047. Remove All Adjacent Duplicates In String (Easy)
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 *
 * Repeatedly delete pairs of equal adjacent letters. Return the string left when no such pair remains.
 *
 * Hint: As you read each letter, which earlier letter could now become its neighbor?
 */
export function removeDuplicates(s: string): string {
  const stack: string[] = [];

  for (const letter of s) {
    if (stack.length > 0 && letter === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }
  return stack.join('');
}

console.log(removeDuplicates('abbaca')); // "ca"

// Remove the block comment after implementing the starter to run this example.
/*
console.log(removeDuplicates("abbaca")); // "ca"

abbaca -> aaca -> ca

*/
