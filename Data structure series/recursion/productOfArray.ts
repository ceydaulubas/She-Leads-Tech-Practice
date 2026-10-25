/** See Problems.md. Implement using recursion. */
export function productOfArray(numbers: number[]): number {
  // TODO: implement the base case and recursive step.
  // throw new Error("productOfArray not implemented");

  // base case
  if (numbers.length === 0) {
    return 1;
  }

  // call function with different input
  return numbers[0] * productOfArray(numbers.slice(1));
}

productOfArray([4, 3, 2, 1]);
// 1*2*3*4

// 1 * productOfArray([2,3,4])
// 2* productOfArray([3,4]
// 2* productOfArray([4]
