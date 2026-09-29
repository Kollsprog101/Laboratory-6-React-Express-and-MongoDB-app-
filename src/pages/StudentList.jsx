import StudentCard from "../components/StudentCard";

function StudentList({ students }) {
  return (
    <div className="list">
      <h2>Student Lists</h2>
      {students.map((student) => (
        <StudentCard key={student._id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;