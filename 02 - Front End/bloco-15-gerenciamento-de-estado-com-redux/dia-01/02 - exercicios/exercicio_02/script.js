// ========== ACTIONTYPES ==========
const TOGGLE_THEME = "TOGGLE_THEME"
const TOGGLE_STATUS = "TOGGLE_STATUS"

// =========== ACTIONS ==========
const actionChangeTheme = () => {
  store.dispatch({ type: TOGGLE_THEME})
};

const actionChangeState = () => {
  store.dispatch({ type: TOGGLE_STATUS})
};

const THEME_INITIAL_STATE = {
  theme: 'dark',
};

  const themeReducer = (state = THEME_INITIAL_STATE, action) => {
    switch (action.type) {
      case "TOGGLE_THEME":
        return {
          ...state,
          theme: state.theme === 'dark' ? 'light' : 'dark',
        }
      default:
        return state;
    }
  };

  const STATUS_INITIAL_STATE = {
    status: 'offline',
  };

  const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
    switch (action.type) {
      case "TOGGLE_STATUS":
        return {
          ...state,
          status: state.status === 'online' ? 'offline': 'online',
        }
      default:
        return state;
    }
  };

  const rootReducer = Redux.combineReducers({themeReducer, statusReducer});

  // ========== STORE ==========
  const store = Redux.createStore(rootReducer);

  store.subscribe(() => {
    const state = store.getState();
    const body = document.querySelector('body');
    const pageStatus = document.getElementById('status');

    if (state.themeReducer.theme === 'dark') {
      themeButton.innerText = 'Light Mode';
      body.style.backgroundColor = '#333';
      body.style.color = '#fff';
    } else {
      themeButton.innerText = 'Dark Mode';
      body.style.backgroundColor = '#fff';
      body.style.color = '#333';
    }
  
    if (state.statusReducer.status === 'online') {
      statusButton.innerText = 'Ficar Offline';
      pageStatus.innerText = 'Online';
    } else {
      statusButton.innerText = 'Ficar Offline';
      pageStatus.innerText = 'Offline';
    }
  });


  const themeButton = document.getElementById('toggle-theme');
  themeButton.addEventListener('click', actionChangeTheme);

  const statusButton = document.getElementById('toggle-status');
  statusButton.addEventListener('click', actionChangeState);
