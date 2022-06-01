import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

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

  const middleWares = [sagaMiddleware];

  const enhancer = composeEnhancers(applyMiddleware(...middleWares));

  const store = createStore(rootReducer, enhancer);

  // rootSaga
  store.runSaga = sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
