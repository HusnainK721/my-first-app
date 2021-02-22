import { createStore, combineReducers } from "redux";
import { groupReducer } from "../Reducers/groupReducer";
import { tableDataReducer } from "../Reducers/tableDataReducer";
export const configreStore = () => {
  const store = createStore(
    combineReducers({
      groupReducer,
      tableDataReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
