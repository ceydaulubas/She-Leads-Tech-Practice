/**
Reverse a string



*/

/*
// This solution is correct. but it's not Stack 
function reverseString(str: string): string {
  const arr: string[] = [];

  for (const st of str) {
    arr.unshift(st);
  }
  return arr.join('');
}


*/

// Last in First Out

function reverseString(str: string): string {
  const arr: string[] = [];

  for (const st of str) {
    arr.push(st);
  }
  let reversed = '';
  while (arr.length > 0) {
    reversed += arr.pop();
  }

  return reversed;
}
console.log(reverseString('hello'));

// Output -> "olleh"
