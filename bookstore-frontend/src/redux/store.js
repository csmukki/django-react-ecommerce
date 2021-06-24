import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./root-reducer";

const middlwares = [logger];

const rootConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persisted = persistReducer(rootConfig, rootReducer);

export const store = createStore(persisted, applyMiddleware(...middlwares));

export const persistor = persistStore(store);
