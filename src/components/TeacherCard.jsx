function TeacherCard({ teacher }) {
  return (
    <div className="card">
      <p>Name: {teacher.name}</p>
      <p>Employee Number: {teacher.employeeNumber}</p>
      <p>Department: {teacher.department}</p>
      <p>Specialization: {teacher.specialization}</p>
      <p>Sex: {teacher.sex}</p>
    </div>
  );
}

export default TeacherCard;