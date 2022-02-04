import { createStore } from "redux";

const plus = document.querySelector(".plusBtn");
const minus = document.querySelector(".minusBtn");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

const numberChange = () => {
  number.innerText = countStore.getState();
};

const countStore = createStore(countModifier);

countStore.subscribe(numberChange);

plus.addEventListener("click", () => countStore.dispatch({ type: "PLUS" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
