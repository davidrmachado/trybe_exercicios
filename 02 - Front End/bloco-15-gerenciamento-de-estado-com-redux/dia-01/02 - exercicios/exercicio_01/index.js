const showColor = (index) => {
  const colorName = document.getElementById("value");
  colorName.innerHTML = index;
  const containerColor = document.getElementById("container");
  containerColor.style.backgroundColor = index;
};

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

// ========== ACTIONTYPES ==========
const NEXT = "NEXT";
const PREVIOUS = "PREVIOUS";
const RANDOM = "RANDOM";

// =========== ACTIONS ==========
const actionNext = () => {
  store.dispatch({ type: NEXT });
};

const actionPrevious = () => {
  store.dispatch({ type: PREVIOUS });
};

const actionRandom = () => {
    const { colors } = store.getState();
    console.log(colors);
  store.dispatch({ type: RANDOM });
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
        index: state.index === (state.colors.length - 1) ? state.index : state.index + 1 };
    case "PREVIOUS":
      return { 
        ...state,
        index: state.index === 0 ? state.index : state.index - 1 };
    case "RANDOM":
      return { 
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      }
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
bttnNext.addEventListener("click", actionNext);

const bttnPrevious = document.getElementById("previous");
bttnPrevious.addEventListener("click", actionPrevious);

const bttnRandom = document.getElementById("random");
bttnRandom.addEventListener("click", actionRandom);
