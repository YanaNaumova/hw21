import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../../redux/slices/questionnaireSlice";

function Question() {
  const questions = useSelector((state) => state.questionnaire.questions);
  const answers = useSelector((state) => state.questionnaire.answers);
  const dispatch = useDispatch();
  const handleInput = (id, answer) => {
    console.log(`Selected answer for question ${id}: ${answer}`);
    dispatch(answerQuestion({ id, answer }));
  };
  console.log(answers);
  return (
    <>
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <legend>{question.question}</legend>
            {question.variants.map((variant, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={question.id}
                  name={question.result}
                  value={variant}
                  onChange={() => {
                    handleInput(question.id, variant);
                  }}
                />
                <label htmlFor="huey">{variant}</label>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}
export default Question;
