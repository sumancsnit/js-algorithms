/**
 * Question: Best Time to Buy and Sell Stock (LeetCode 121)
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Given an array where each element represents the price of a stock on a given day,
 * find the maximum profit you can achieve by buying on one day and selling on another later day.
 * You can only complete one transaction (buy once and sell once).
 *
 * Example:
 * Input: [1,3,5,7,2,8,10]
 * Output: 9 (Buy at 1, sell at 10)
 */

/**
 * Brute-force approach: Checks every possible pair of buy/sell days.
 * Time Complexity: O(n^2)
 */
const cellStocks = (arr) => {
  let profit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = arr.at(j) - arr.at(i);
      if (diff > profit) profit = diff;
    }
  }
  return profit;
};

const list = [1, 3, 5, 7, 2, 8, 10];
console.log(cellStocks(list)); // Output: 9

/**
 * Optimized approach: Tracks the minimum price so far and calculates profit for each day.
 * Time Complexity: O(n)
 */
const sellStocks2 = (arr) => {
  let min = arr.at(0);
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    const current = arr.at(i);
    const profit = current - min;
    if (current < min) min = current;
    if (profit > maxProfit) maxProfit = profit;
    console.log({ current, profit });
  }
  return maxProfit;
};

console.log(sellStocks2(list)); // Output: 9
