import { combineReducers } from "redux";
import tokenReducer from "./token/slice";
export const rootReducer = combineReducers({
  token: tokenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
