import { all, fork } from "redux-saga/effects";
import { combineReducers } from "redux";
import { CommonReducer, CommonSaga } from "./Common";
import { HomeReducer, HomeSaga } from "./Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

const commonPersistConfig = {
  key: "common",
  storage: AsyncStorage,
  whitelist: [
    "accessToken",
    "codePKCE",
    "configFeature",
    "googleToken",
    "user",
  ],
};
const RootReducer = combineReducers({
  common: persistReducer(commonPersistConfig, CommonReducer),
  home: HomeReducer,
});

const ReduxSaga = function* ReduxSaga() {
  yield all([fork(CommonSaga), fork(HomeSaga)]);
};

export { ReduxSaga, RootReducer };
