import { useState } from "react";
import AddTag from "../add-tag/add-tag.component";

import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";

import "./user-card.styles.css";

const UserCard = (props) => {
  const [showGrades, setShowGrades] = useState(false);

  const { firstName, lastName, email, company, skill, grades, image, id, tag } =
    props;

  const toggleButton = () => {
    setShowGrades((prevState) => !prevState);
  };

  const sumGrades = grades
    ? grades.reduce((acc, currentGrade) => acc + parseInt(currentGrade), 0)
    : 0;
  const averageGrades = grades ? sumGrades / grades.length : 0;

  const gradesMap = grades
    ? grades.map((grade, index) => {
        return (
          <p key={index}>
            Test{index + 1}: <span style={{ marginLeft: "1.25rem" }} />
            {grade}%
          </p>
        );
      })
    : null;

  return (
    <>
      <div className="user-card-container">
        <div className="user-img-container">
          <img className="user-img" src={image} alt="" />
        </div>
        <div className="user-info-container">
          <div className="user-header">
            <h2 className="user-name">
              {firstName} {lastName}
            </h2>
            <button className="button-display" onClick={toggleButton}>
              {showGrades ? (
                <FaMinus className="icon-signal" />
              ) : (
                <GoPlus className="icon-signal" />
              )}
            </button>
          </div>
          <div className="user-info">
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <p>Average: {averageGrades}%</p>

            {showGrades && <div className="grades-container">{gradesMap}</div>}

            {tag.length > 0 && (
              <div className="tag-container">
                {tag.map((item, index) => {
                  return (
                    <span className="tag-item" key={index}>
                      {item}
                    </span>
                  );
                })}
              </div>
            )}

            <AddTag userId={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
