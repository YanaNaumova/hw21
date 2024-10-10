import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      variants: ["Paris", "London"],
      result: "Paris",
    },
    {
      id: 2,
      question: "What is 2 + 2?",
      variants: ["3", "4"],
      result: "4",
    },
    {
      id: 3,
      question: "Which planet is known as the Red Planet?",
      variants: ["Earth", "Mars"],
      result: "Mars",
    },
    {
      id: 4,
      question: "Who wrote 'Hamlet'?",
      variants: ["William Shakespeare", "Charles Dickens"],
      result: "William Shakespeare",
    },
    {
      id: 5,
      question: "What is the largest ocean on Earth?",
      variants: ["Atlantic Ocean", "Pacific Ocean"],
      result: "Pacific Ocean",
    },
  ],
  answers: {},

  result: "",
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion(state, action) {
      const { id, answer } = action.payload;
      state.answers[id] = answer;
    },
    sendenAnswer(state) {
      let count = 0;
      state.questions.forEach((question) => {
        if (state.answers[question.id] === question.result) {
          count++;
        }
      });

      state.result = `Вы правильно ответили на ${count} вопросов из ${state.questions.length}`;
    },
    reset(state) {
      state.answers = {};
      state.result = "";
    },
  },
});

export const { answerQuestion, sendenAnswer, reset } =
  questionnaireSlice.actions;
export default questionnaireSlice.reducer;
