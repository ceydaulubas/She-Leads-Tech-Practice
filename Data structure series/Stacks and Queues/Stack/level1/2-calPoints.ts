/**
 * 682. Baseball Game (Easy)
 * https://leetcode.com/problems/baseball-game/
 *
 * Apply the scoring operations in order. A number adds that score, "+" adds
 * the sum of the last two, "D" adds twice the last score, and "C" removes the
 * last score. Return the sum of the scores that remain.
 *
 * Hint: Which end of an array gives you quick access to the newest score and the one before it?
 */
export function calPoints(operations: string[]): number {
  const stack: number[] = [];

  for (const operation of operations) {
    const last = stack[stack.length - 1];
    if (operation === 'C') {
      stack.pop();
    } else if (operation === 'D') {
      stack.push(last * 2);
    } else if (operation === '+') {
      const previous = stack[stack.length - 2];
      stack.push(last + previous);
    } else {
      stack.push(Number(operation));
    }
  }
  const sum = stack.reduce((sum, num) => sum + num, 0);
  return sum;
}

console.log(calPoints(['5', '2', 'C', 'D', '+'])); // 30

// Remove the block comment after implementing the starter to run this example.
/*
console.log(calPoints(["5", "2", "C", "D", "+"])); // 30

LIFO

A -> + sum of last two [].push 
D -> add last score  +[lenght-1]  
C-> remove last score -[lenght-1] -> [].pop

*/
