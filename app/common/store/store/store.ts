import AsyncStorage from '@react-native-community/async-storage';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {Platform} from 'react-native';
// import KeyChainStorage from '../storage/KeyChainStorage';

const STORE_TIMEOUT = 15000;

// Root config for all state except the ones with custom configs
const rootPersistConfig = {
  key: 'root',
  storage: Platform.OS === 'web' ? storage : AsyncStorage,
  blacklist: ['user', 'app'],
  timeout: STORE_TIMEOUT,
};

// // Config just for app, codePushUpdateStatus is transient
// const appPersistConfig = {
//   key: 'app',
//   storage: AsyncStorage,
//   blacklist: ['codePushUpdateStatus'],
//   timeout: STORE_TIMEOUT,
// };
//
// // Config just for auth, uses Keychain, and newCreditCard is transient
// const userPersistConfig = {
//   key: 'user',
//   storage: KeyChainStorage,
//   blacklist: ['newCreditCard'],
//   timeout: STORE_TIMEOUT,
// };

const combinedReducers = combineReducers({});

// @ts-ignore
const store = configureStore({
  reducer: persistReducer(rootPersistConfig, combinedReducers),
  // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof combinedReducers>;
export type AppDispatch = typeof store.dispatch;

export default store;
