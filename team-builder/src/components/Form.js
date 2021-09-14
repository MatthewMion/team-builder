import React from "react";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Name
          <input
            type="text"
            name="memberName"
            placeholder="Type a username"
            onChange={onChange}
            value={values.memberName}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="memberEmail"
            placeholder="Type an email"
            maxLength="30"
            onChange={onChange}
            value={values.memberEmail}
          />
        </label>
        <label>
          Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select
            value={values.memberRole}
            name="memberRole"
            onChange={onChange}
          >
            <option value="">-- Select a Role --</option>
            <option value="Student">Student</option>
            <option value="Manager">Manager</option>
            <option value="Technician">Technician</option>
            <option value="Window Washer">Window Washer</option>
          </select>
        </label>

        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
