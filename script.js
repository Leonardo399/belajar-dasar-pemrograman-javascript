const scores = [70, 85, 90, 5];
const minimumScore = 65;

const examPassed = scores.every((score) => {
  return score >= minimumScore
});
console.log(examPassed);

/**
output
true
**/