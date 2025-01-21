import { all, Effect, put } from "redux-saga/effects";
import { REDUX_ACTION } from "@/redux/index";
import { ApiSuccessResponse } from "@/type";
import { store } from "@/core";
import { globalMessage } from "@/components";

export function* invoke<T>(
  execution: () => Generator<Effect, void, ApiSuccessResponse<T>>,
  actionFailed: string,
  callback?: () => void,
  callbackError?: (error: any) => void,
  isShowLoading = true
): Generator<Effect, void, ApiSuccessResponse<T>> {
  try {
    const { isConnected, loading } = store.getState().appState;

    if (isConnected) {
      globalMessage.show({ title: "Notification", content: "No internet" });
      return;
    }
    if (!loading && isShowLoading) {
      yield put({ type: REDUX_ACTION.APP_STATE_ACTION.LOADING_SHOW });
    }
    yield* execution();
    callback && callback();
  } catch (error: any) {
    console.log("Saga execute error ===>", error);
    yield put({ type: `${actionFailed}` });
    // UNAUTHORIZED
    if (error?.statusCode === 401) {
      // Logout logic
      return;
    }
    // ACCESS_DENIED
    if (error?.statusCode === 403) {
      globalMessage.show({
        title: "Access Denied",
        content: "You do not have permission to implement this action.",
        // action: () => NAVIGATION.reset(STACK_NAME.AUTHENTICATION_STACK),
      });
      return;
    }
    if (callbackError) {
      callbackError(error);
      return;
    } else {
      globalMessage.show({
        title: "Error",
        content: error?.message || "",
      });
      return;
    }
  } finally {
    yield all([
      yield put({ type: REDUX_ACTION.APP_STATE_ACTION.LOADING_HIDE }),
    ]);
  }
}
