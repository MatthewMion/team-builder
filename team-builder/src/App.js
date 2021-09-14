import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

const memberList = [
  {
    memberName: "Matt",
    memberEmail: "mattsemail@gmail.com",
    memberRole: "Student",
  },
];

const initialFormValues = {
  memberName: "",
  memberEmail: "",
  memberRole: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState(memberList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newMember = {
      memberName: formValues.memberName.trim(),
      memberEmail: formValues.memberEmail.trim(),
      memberRole: formValues.memberRole,
    };

    // if (
    //   !newMember.memberName ||
    //   !newMember.memberEmail ||
    //   !newMember.memberRole
    // ) {
    //   return;
    // }
    setTeamMembers(teamMembers.concat(newMember));
    setFormValues(initialFormValues);
  };
  return (
    <div className="App">
      <Form values={formValues} update={updateForm} submit={submitForm} />
      {teamMembers.map((member, idx) => (
        <div key={idx}>
          <h2>Name:{member.memberName}</h2>
          <p>Email: {member.memberEmail}</p>
          <p>Role: {member.memberRole}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
