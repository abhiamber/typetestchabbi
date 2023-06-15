import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
} from "redux";
import reducer from "./Redux/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  resetData: reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
