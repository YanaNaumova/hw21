import { useSelector } from "react-redux";

function Result() {
  const result = useSelector((state) => state.questionnaire.result);
  return <div>{result && <div>{result}</div>}</div>;
}

export default Result;
