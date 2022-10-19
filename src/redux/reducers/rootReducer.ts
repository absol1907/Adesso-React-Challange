import { combineReducers } from "redux";

import unitsReducer from "./unitsReducer";

const rootReducer = combineReducers({
  filter: unitsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
