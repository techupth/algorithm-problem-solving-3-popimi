function sortStudentsByScore(students) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i <= students.length - 1; i++) {
    for (let j = 0; j < students.length - i; j++) {
      if (students[j].score < students[j + 1]?.score) {
        let convert = students[j].score;
        students[j].score = students[j + 1].score;
        students[j + 1].score = convert;
      }
    }
  }
  return students;
}

const students = [
  { id: "S001", name: "Anan", score: 85 },
  { id: "S002", name: "Boon", score: 92 },
  { id: "S003", name: "Chai", score: 78 },
  { id: "S004", name: "Dao", score: 95 },
  { id: "S005", name: "Ek", score: 88 },
  { id: "S006", name: "Fah", score: 80 },
];

console.log(sortStudentsByScore(students));
