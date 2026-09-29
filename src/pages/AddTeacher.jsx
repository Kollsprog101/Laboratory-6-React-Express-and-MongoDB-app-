import { useState } from "react";

function AddTeacher({ onAddTeacher }) {
  const [name, setName] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [specialization, setSpecialization] = useState("Programming");
  const [sex, setSex] = useState("Male");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTeacher({ employeeNumber, name, department, specialization, sex });

    setName("");
    setEmployeeNumber("");
    setDepartment("");
    setSpecialization("Programming");
    setSex("Male");
  };

  return (
    <form className="teacher-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label>
        Employee Number:
        <input
          value={employeeNumber}
          onChange={(e) => setEmployeeNumber(e.target.value)}
          required
        />
      </label>

      <label>
        Department:
        <input
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </label>

      <label>
        Specialization:
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="Programming">Programming</option>
          <option value="Networking">Networking</option>
          <option value="Database">Database</option>
        </select>
      </label>

      <select value={sex} onChange={(e) => setSex(e.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTeacher;