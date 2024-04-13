// import React, { useState } from "react";
// import Option from "../components/Option";
// import "../css/Trivia.css";
// import { useGame } from "../hooks/useGame";

// function Trivia() {
//   const { questions } = useGame();
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [isCorrect, setIsCorrect] = useState(null);

//   const handleAnswer = (correct, answer) => {
//     setSelectedAnswer(answer);
//     setIsCorrect(correct);
//     // Log based on correctness
//     console.log(correct ? "Correct" : "Incorrect");
//   };

//   return (
//     <div className="container">
//       <div className="question-box">
//         {questions.map((ques, index) => (
//           <div className="question" key={index}>
//             <h2>{ques.question}</h2>
//             <p>{ques.planet}</p>
//             <div className="choices">
//               {ques.answers.map((ans, index) => (
//                 <Option
//                   key={index}
//                   answer={ans.text}
//                   onClick={() => handleAnswer(ans.correct, ans.text)}
//                   isSelected={ans.text === selectedAnswer}
//                   isCorrect={isCorrect}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Trivia;

import React, { useState } from "react";
import Option from "../components/Option";
import "../css/Trivia.css";
import { useGame } from "../hooks/useGame";

function Trivia() {
  const { questions, answer_question } = useGame();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(false);

  const handleAnswer = (correct, answer) => {
    answer_question(correct);
    if (!answerSelected) {
      setSelectedAnswer(answer);
      setIsCorrect(correct);
      setAnswerSelected(true); // Disable further selection
      console.log(correct ? "Correct" : "Incorrect");
    }
  };

  return (
    <div className="container">
      <div className="question-box">
        {questions.map((ques, index) => (
          <div className="question" key={index}>
            <h2>{ques.question}</h2>
            <p>{ques.planet}</p>
            <div className="choices">
              {ques.answers.map((ans, index) => (
                <Option
                  key={index}
                  answer={ans.text}
                  onClick={() => handleAnswer(ans.correct, ans.text)}
                  isSelected={ans.text === selectedAnswer}
                  isCorrect={isCorrect}
                  disabled={answerSelected}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trivia;
