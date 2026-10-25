/** See Problems.md. Implement using recursion. */
export function fib(n: number): number {
  // TODO: implement the base case and recursive step.
  // throw new Error('fib not implemented');

  // base case
  if (n === 1 || n === 2) {
    return 1;
  }

  return n + fib(n - 2);
}

console.log(fib(4));

// What is the fobonacci series:  is a sequence of numbers
// in which each number is the sum of the two previous numbers.
// The first two numbers are: 0, 1. So, the sequence becomes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

// 0 1 1 2 3 5 8 13
// 0+1=1
//   1+1=2
//     1+2=3
//       2+3=5
//         3+5=8
//           5+8=13
