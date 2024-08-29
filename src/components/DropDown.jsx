import React, { useState } from "react";
import DownArrow from "../assets/Arrowdown.png";

const DropDown = ({ setTag }) => {
  const [options, setOptions] = useState(["urgent", "Important"]);

  const [selected, setSelected] = useState(null);

  const [isOpen, setisOpen] = useState(false);

  const toggleDropdown = () => {
    setisOpen(!isOpen);
  };

  const handleOption = (option) => {
    setSelected(option);
    setisOpen(false);
    setTag(option);
  };

  return (
    <div className="tag-new position-relative rounded-2  py-4 px-5">
      <h3 className="position-absolute">Tags</h3>
      <div
        onClick={toggleDropdown}
        className="d-flex justify-content-between align-items-center"
      >
        <div className=" d-flex align-items-center gap-5">
          <p className="m-0 p-1 px-2 rounded-1">
            {selected || "select a tag"}
            {""}
          </p>
        </div>
        <img
          src={DownArrow}
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
            transition: "0.3s ease-in-out",
          }}
          alt=""
        />
      </div>
      <ul className="positio-absolute mt-4 bg-secondary w-100 list-unstyled start-0 rounded-2 p-1 text-white">
        {isOpen
          ? options.map((option) => {
              return (
                <li
                  onClick={() => {
                    return handleOption(option);
                  }}
                  key={option}
                  className="p-"
                  style={{ cursor: "pointer" }}
                >
                  {options}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default DropDown;
