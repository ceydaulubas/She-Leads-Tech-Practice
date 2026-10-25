/** See Problems.md. Implement using recursion. */
export function factorial(n: number): number {
  // TODO: implement the base case and recursive step.

  // 4*3*2*1

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(4)); //24
