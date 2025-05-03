export function addition(a, b) {
  return a + b;
}

export function subtraction(a, b) {
  return a - b;
}

export function multiplication(a, b) {
  return a * b;
}

export function division(a, b) {
  if (b === 0) throw new Error("Sorry, cannot divide by zero. Try again.");
  return a / b;
}
