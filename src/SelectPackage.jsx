import React from "react";
function SelectPackage() {
  return (
    <div id="section-2" className="select-package">
      <h2>Select your desired package</h2>
      <input
        type="number"
        name="travelDuration"
        id="travelDuration"
        min="1"
        max="7"
        placeholder="No. of days"
      />
      <input
        type="number"
        name="noOfAdults"
        id="noOfAdults"
        min="1"
        max="10"
        placeholder="No. of adults"
      />
    </div>
  );
}
export { SelectPackage };
