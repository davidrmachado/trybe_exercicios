const showColor = (index) => {
//   const { index, colors } = store.getState();
  const colorName = document.getElementById("value");
  colorName.innerHTML = index;
  const containerColor = document.getElementById("container");
  containerColor.style.backgroundColor = index;
};

// ========== ACTIONTYPES ==========
const NEXT = "NEXT";
const PREVIOUS = "PREVIOUS";

// =========== ACTIONS ==========
const actionNext = () => {
  store.dispatch({ type: NEXT });
};

const actionPrevious = () => {
  store.dispatch({ type: PREVIOUS });
};

// ========== REDUCER ==========
const INITIAL_STATE = {
  colors: ["white", "gray", "red", "green", "blue", "yellow"],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NEXT":
      return { 
        ...state,
        index: state.index === 5 ? state.index : state.index + 1 };
    case "PREVIOUS":
      return { 
        ...state,
        index: state.index === 0 ? state.index : state.index - 1 };
    default:
      return state;
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { index, colors } = store.getState();
  showColor(colors[index]);
});

const bttnNext = document.getElementById("next");
const bttnPrevious = document.getElementById("previous");

bttnNext.addEventListener("click", actionNext);
bttnPrevious.addEventListener("click", actionPrevious);
