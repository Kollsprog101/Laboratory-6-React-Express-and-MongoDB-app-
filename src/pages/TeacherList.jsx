import TeacherCard from "../components/TeacherCard";

function TeacherList({ teachers }) {
  return (
    <div className="list">
      <h2>Teacher Lists</h2>
      {teachers.map((teacher) => (
        <TeacherCard key={teacher._id} teacher={teacher} />
      ))}
    </div>
  );
}

export default TeacherList;