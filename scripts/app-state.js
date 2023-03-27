// Define a state object
const state = {
  query: '',
};

// Define a list of observers
const observers = [];

// Define a function to notify all observers of state changes
function notifyObservers() {
  for (let i = 0; i < observers.length; i++) {
    observers[i](state);
  }
}

// Define a function to update the state and notify observers
function setState(action) {
  const handler = REDUCERS[action.action];
  if(!handler) return;
  state = handler(action);
  
  notifyObservers();
}

const ACTION_TYPE = {
  setQuery: 'action/setQuery',
}

const REDUCERS = {
  [ACTION_TYPE.setQuery]: (action) => ({ ...state, query: action.payload.query}),
}

export const ACTIONS = {
  setQuery: (query) => setState({ action: ACTION_TYPE.setQuery, payload: { query }}),
}

// Define a function to subscribe to state changes
export function subscribe(observer) {
  observers.push(observer);
}

// Define a function to unsubscribe from state changes
export function unsubscribe(observer) {
  const index = observers.indexOf(observer);
  if (index !== -1) {
    observers.splice(index, 1);
  }
}

