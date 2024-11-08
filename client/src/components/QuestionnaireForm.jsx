import React, { useState } from 'react';
import './../styles/QuestionnaireForm.css';

const QuestionnaireForm = () => {
  const [formData, setFormData] = useState({
    1: 3,
    2: 3,
    3: 3,
    4: 3,
    5: 3,
    6: 3,
    7: 3,
    8: 3,
    9: 3,
    10: 3,
  });
  const [mentalStatus, setMentalStatus] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const questions = [
    "Have you been able to not concentrate on what you are doing?",
    "Have you recently lost much sleep over worry?",
    "Have you recently felt you were not playing a useful part in things?",
    "Have you recently felt not capable of making decisions about things?",
    "Have you recently felt constantly under strain?",
    "Have you felt you couldn't overcome your difficulties",
    "Have you not been able to enjoy your normal day-to-day activities",
    "Have you not been able to face up to your problems?",
    "Have you recently been feeling unhappy and depressed?",
    "Have you recently been losing confidence in yourself?",
  ];
  const options = [
    ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
  ];

  const handleChange = (questionIndex, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [questionIndex + 1]: value,
    }));
  };

  const handleSubmit = () => {
    const totalPoints = Object.values(formData).reduce(
      (acc, value) => acc + calculatePoints(value),
      0
    );

    let status;
    if (totalPoints >= 50) {
      status =
        "Congratulations on an outstanding performance in the mental test! Your exceptional results showcase high intelligence and proficiency. Your impressive capabilities and strengths shine through. Keep up the exceptional work and consider using your talents for new challenges. The sky's the limit for someone with your remarkable abilities!";
    } else if (totalPoints >= 30) {
      status =
        "Great job on the mental test! Solid results show a good grasp of the material. Your commendable skills and understanding shine through. Recognize your strengths, and use them to develop in areas of interest. With dedication and curiosity, you're on your way to greater success. Use this website for overall wellness. Keep up the good work!";
    } else if (totalPoints >= 20) {
      status =
        "Congratulations on finishing the mental test! Your results reveal solid performance and many strengths. While there's room for skill enhancement, see it as a chance for growth. Focus on specific areas, remembering progress is a journey. Your achievements are commendable; with targeted effort, you'll excel further. Use this website for overall wellness. Keep up the great work!";
    } else {
      status =
        "While test results may disappoint, view it as a chance for growth. Identify areas for improvement, seek support, and embrace setbacks as part of learning. With resilience and effort, you can turn things around and keep moving forward.";
    }

    setMentalStatus(status);
    setFormSubmitted(true);
  };

  const calculatePoints = (value) => {
    switch (value) {
      case "Strongly Agree":
        return 1;
      case "Agree":
        return 2;
      case "Neutral":
        return 3;
      case "Disagree":
        return 4;
      case "Strongly Disagree":
        return 5;
      default:
        return 0;
    }
  };

  return (
    <div className="Box_qn">
      <h1>Questionnaire</h1>
      <p>
        Your mental well-being is important to us. Please take a moment to
        answer the following questions to help us provide you with relevant
        information and support. Your responses are completely anonymous.
      </p>
      <form className="Form_qn">
        {questions.map((question, index) => (
          <div key={index} className="div_qn">
            <label className="questionsLable">{`${index + 1}. ${question}`}</label>
            {options[index].map((option, value) => (
              <label className="answerLable" key={value}>
                <input
                  type="radio"
                  value={option}
                  checked={formData[index + 1] === option}
                  onChange={() => handleChange(index, option)}
                />
                {option}
              </label>
            ))}
            <hr />
          </div>
        ))}
        <button className="btn_qn" type="button" onClick={handleSubmit}>
          Submit
        </button>
        {formSubmitted && (
          <div>
            <h2>Mental Status</h2>
            <p>{mentalStatus}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuestionnaireForm;
