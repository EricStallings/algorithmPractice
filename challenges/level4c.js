/* ********************************************* Problem A ********************************************* */

/*
Write a function 'anagrams' that produces all possible anagrams of a string and outputs them as an array.
Example:
console.log(anagrams('aabc')); -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
*/

const anagrams = str => {
  const strArr = str.split('');
  const result = [];

  const swap = (arr, i, j) => {
    [arr[j], arr[i]] = [arr[i], arr[j]];
  };

  const heaps = index => {
    if (index === strArr.length) result.push(strArr.join(''));

    for (let j = index; j < strArr.length; j += 1) {
      swap(strArr, index, j); // choose
      heaps(index + 1); // explore
      swap(strArr, index, j); // unchoose
    }
  };
  heaps(0);

  return result.filter(
    (anagram, index, array) => array.indexOf(anagram) === index
  );
};

/* ********************************************* Problem B ********************************************* */

/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

const pascalTriangle = numRows => {
  if (numRows < 1) return 0;
  const pascalT = [[1]];
  for (let i = 0; i < numRows - 1; i++) {
    const inner = [1];
    let j = 1;
    while (pascalT[i][j]) {
      inner.push(pascalT[i][j] + pascalT[i][j - 1]);
      j++;
    }
    inner.push(1);
    pascalT.push(inner);
  }

  return pascalT;
};

/* ********************************************* Problem C ********************************************* */

/*
I have an array stock_prices_yesterday where:

- The indices are the time in minutes past trade opening time, which was 9:30am local time
- The values are the prices in dollars of Apple stock at the time

For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;

Write a function 'bestProfit' for computing the best profit I could have made from 1 purchase
and 1 sale of 1 Apple stock yesterday

Return 0 if no profit is possible OR if input is invalid.

More examples:
bestProfit([ 100, 1, 123, 120 ]); // 122
bestProfit([ 100, 100, 100, 100 ]); // 0
bestProfit([ 100, 88, 44, 2 ]); // 0
bestProfit([ 100, 88, 99, 300 ]); // 212
*/

const bestProfit = stockPricesYesterday => {
  if (!Array.isArray(stockPricesYesterday)) return 0;
  let low = Infinity;
  let profit = 0;

  stockPricesYesterday.forEach(price => {
    low = price < low ? price : low;
    profit = price - low > profit ? price - low : profit;
  });

  return profit;
};
