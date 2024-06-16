import filterReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistContactsReduser = persistReducer(
  contactsPersistConfig,
  contactsReducer
);
const searchPersistConfig = {
  key: "searchFilter",
  storage,
  whitelist: ["name"],
};
const persistedFilterRedecer = persistReducer(
  searchPersistConfig,
  filterReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReduser,
    filters: persistedFilterRedecer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
