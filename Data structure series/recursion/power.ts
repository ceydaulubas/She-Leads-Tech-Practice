/** See Problems.md. Implement using recursion. */
export function power(base: number, exponent: number): number {
  // TODO: implement the base case and recursive step.

  // 2**6
  // 2*2*2*2*2*2

  // base case: if exponent is 0, return 1
  if (exponent === 0) {
    return 1;
  }

  base = base * power(base, exponent - 1);

  return base;
  // throw new Error('power not implemented');
}

console.log(power(2, 6)); // 64

// power(2,0)  -->1
// 2 ^0 =1

// power (2,2) // 2*2 = 4
// power(2,4) // 2*2*2*2*1= 16
