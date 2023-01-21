import React from "react";

function PersonalInfo(props) {
    const {userData,handleChange,handleNextBtnClick}=props;
  return (
    <div className="personal-info" id='section-1'>
      <h2>Personal Info</h2>
      <p className="txt">What should we call you, sir?</p>
      <input
        title="First Name"
        type="text"
        id="firstName"
        placeholder="First name"
        name="firstName"
        className="username"
        onChange={handleChange}
        value={userData.firstName}
        required
      />
      <input
        title="Last Name"
        type="text"
        id="lastName"
        placeholder="Last name"
        name="lastName"
        className="username"
        onChange={handleChange}
        value={userData.lastName}
        required
      />
      <p className="txt">How do we contact you?</p>
      <input
      className="contact"
        title="Email"
        type="email"
        id="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={userData.email}
        required
      />
      <input
      className="contact"
        title="Contact number"
        type="tel"
        name="contact"
        id="contact"
        placeholder="Contact number"
        onChange={handleChange}
        value={userData.contact}
        required
      />
      <a href='#section-2'>
        <input
          onClick={handleNextBtnClick}
          type="button"
          className="next-btn"
          value="Next"
        />
      </a>
    </div>
  );
}

export { PersonalInfo };
