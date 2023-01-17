import React from "react";
import { useState } from "react";
import "./book.scss";

function Book() {
  const [userData, setUserData] = useState({
    firstName: ``,
    lastName: ``,
    email: ``,
    contact: ``,
    noOfTourist: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [name]: value,
      };
    });
  }

  function scrollToNextSection() {
    console.log(
      "validate the details filled in the previous section first. If not correct, then prompt the user."
    );
    console.log("scroll to the next section!");
  }

  return (
    <div className="booking--wrapper">
      {/*validate the details before going to the next step*/}

      {/* personal info */}
      <div className="personal-info">
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
        />
        <p className="txt">How do we contact you?</p>
        <input
          title="Email"
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
        <input
          title="Contact number"
          type="tel"
          name="contact"
          id="contact"
          placeholder="Contact number"
          onChange={handleChange}
          value={userData.contact}
        />
        <a href="#select-package">
          <input
            onClick={scrollToNextSection}
            type="button"
            className="next-btn"
            value="Next"
          />
        </a>
      </div>

      {/* package selection */}
      <div id="select-package" className="select-package"></div>
    </div>
  );
}

export { Book };
