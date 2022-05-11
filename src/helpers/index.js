export const calculateTotal = (amount, quote) => {
  // Conditions
  // 0 - 1000 = .25
  // 1001 - 5000 = .20
  // 5001 - 10000 = .15
  // +10001 = .10

  let total;
  if (amount < 1000) {
    total = amount * 0.25;
  } else if (amount < 5000) {
    total = amount * 0.2;
  } else if (amount < 10000) {
    total = amount * 0.15;
  } else {
    total = amount * 0.1;
  }

  // tax
  // 3 = .5
  // 6 = .10
  // 12 = .15
  // 24 = .20

  let tax = 0;
  if (quote === 3) {
    tax = amount * 0.05;
  } else if (quote === 6) {
    tax = amount * 0.1;
  } else if (quote === 12) {
    tax = amount * 0.15;
  } else if (quote === 24) {
    tax = amount * 0.2;
  }

  return total + tax + amount;
};
