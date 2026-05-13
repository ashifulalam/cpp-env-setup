const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

var twoSum = function(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (seen.has(need)) {
      return [seen.get(need), i];
    }

    seen.set(nums[i], i);
  }

  return [];
};

if (input) {
  const values = input.split(/\s+/).map(Number);
  const n = values[0];
  const target = values[1];
  const nums = values.slice(2, 2 + n);

  console.log(twoSum(nums, target).join(" "));
}
