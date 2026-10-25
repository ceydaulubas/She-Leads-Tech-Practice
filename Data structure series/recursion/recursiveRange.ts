/** See Problems.md. Implement using recursion. */
export function recursiveRange(n: number): number {
  // TODO: implement the base case and recursive step.
  // throw new Error("recursiveRange not implemented");

  // base case
  if (n <= 0) {
    return 0;
  }
  // call function with different input
  return n + recursiveRange(n - 1);
}

console.log(recursiveRange(10)); // 55
// 6+5+4+3+2+1
