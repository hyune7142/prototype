import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleWare from "redux-saga";

const configureStore = (customHistory) => {
  const sagaMiddleware = createSagaMiddleWare({
    context: {
      history: customHistory,
    },
  });

  const useReduxDevTollsExtension =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function";

  const composeEnhancers = useReduxDevTollsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

  // Reducer Add
  const rootReducer = combineReducers({
    //reducers
  });

  const middleWares = [sagaMiddleware];

  const enhancer = composeEnhancers(applyMiddleware(...middleWares));

  const store = createStore(rootReducer, enhancer);

  // rootSaga
  store.runSaga = sagaMiddleware.run;

  return store;
};

export default configureStore;
