function StudentCard({ student }) {
  return (
    <div className="card">
      <p>Name: {student.name}</p>
      <p>Student Number: {student.studentNumber}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}

export default StudentCard;