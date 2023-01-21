import React from "react";
import { useState } from "react";
import "./book.scss";
import { PersonalInfo } from "./PersonalInfo";
import {SelectPackage} from "./SelectPackage"

function Book() {
  // const [currentSection, setCurrentSection] = useState(1);

  const [userData, setUserData] = useState({
    firstName: ``,
    lastName: ``,
    email: ``,
    contact: ``,
    noOfTourist: 0,
  });

  function handleUserDataChange(e) {
    const { name, value } = e.target;
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [name]: value,
      };
    });
  }

  function scrollToNextSection() {
    // setCurrentSection((prevSection) => prevSection + 1);
    console.log(
      "validate the details filled in the previous section first. If not correct, then prompt the user."
    );
    console.log("scroll to the next section!");
  }

  return (
    <div className="booking--wrapper">
      <PersonalInfo
        userData={userData}
        // currentSection={currentSection}
        handleChange={handleUserDataChange}
        handleNextBtnClick={scrollToNextSection}
      />
      <SelectPackage/>
      
    </div>
  );
}

export { Book };
