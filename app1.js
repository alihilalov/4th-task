const scores = [42, 24, 75, 79, 90];
const [firstScores, secondScores] = scores;
const students = {
  name: "Ali",
  age: 19,
  isEnrolled: true,
};
const { name, age } = students;
console.log(name, age);
console.log(
  typeof scores,
  typeof students,
  typeof firstScores,
  typeof secondScores,
  typeof name,
  typeof age
);
console.log(scores.length);
console.log(firstScores + secondScores);
console.log(firstScores - secondScores);
console.log(firstScores > secondScores);
console.log(firstScores < secondScores);
console.log(firstScores > 0 || secondScores == 0);
console.log(firstScores === 2 && secondScores !== 32);
console.log(students.age == 19 || secondScores > 20);
console.log(students.isEnrolled != true);
