import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers";
import logger from "redux-logger";


const initStore = () => {


    const getMiddleware = () => {
        if (process.env.NODE_ENV === "development") {
          return applyMiddleware(logger);
        }
        return;
      };
    
    const middleware = getMiddleware();


    const store = createStore(
        rootReducer,
        middleware
    );

    return store;
};

export default initStore;