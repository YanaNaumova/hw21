import "./App.css";
import Question from "./components/question";
import Result from "./components/result";
import { useDispatch } from "react-redux";
import { sendenAnswer, reset } from "./redux/slices/questionnaireSlice";

function App() {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(sendenAnswer());
  };

  return (
    <div className="App">
      <Question />
      <div className="btn">
        <button onClick={handleSubmit}>Send</button>
        <button onClick={() => dispatch(reset())}>Начать заново</button>
      </div>
      <Result />
    </div>
  );
}

export default App;
