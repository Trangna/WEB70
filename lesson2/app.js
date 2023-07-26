import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const students = [
  { id: 1, name: "Alice", age: 10 },
  { id: 2, name: "Bob", age: 11 },
  { id: 3, name: "Charlie", age: 11 },
];

app.get("/home", (req, res) => {
  console.log("Home");
  res.send("Hello, world!");
});

//GET ALL
app.get("/students", (req, res) => {
  res.json(students);
});

//GET DETAILS : search param
app.get("/students/:studentID", (req, res) => {
  const data = students.find((student) => student.id === +req.params.studentID);
  //du lieu truyen vao la string con du lieu search la number nen can them dau "+"
  //find: tra ve du lieu dau tien, filter: tra ve tat ca du lieu match
  if (data) return res.json(data);

  res.json({
    code: 400,
    message: "student not found",
  });
});

//POST
app.post("/students/add", (req, res) => {
  const data = req.body;
  students.push({
    id: Math.random(),
    ...data,
  });

  res.json({
    code: 200,
    message: "student created successfully",
  });
});

//GET Search query

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
