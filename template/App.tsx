import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/core";
import { Provider } from "react-redux";
import React from "react";
import { StatusBar } from "react-native";
import Navigator from "./src/navigator";
import { I18nextProvider } from "react-i18next";
import i18next from "./src/util/language";

import { GlobalMessage, globalMessageRef } from "@/components";
import { GlobalLoading, globalLoadingRef } from "@/components/GlobalModal";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <GlobalMessage ref={globalMessageRef} />
            <GlobalLoading ref={globalLoadingRef} />
            <Navigator />
          </PersistGate>
        </Provider>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

export default App;
