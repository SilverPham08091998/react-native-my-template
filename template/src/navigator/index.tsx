import { navigationRef, SCREEN_NAME } from "@/util/constants";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "@/navigator/TabHomeNavigator/Home";
import SearchStack from "@/navigator/TabHomeNavigator/Search";
import CategoriesStack from "@/navigator/TabHomeNavigator/Categories";
import UserStack from "@/navigator/TabHomeNavigator/User";
import BottomTabHome from "@/navigator/TabHomeNavigator";
import { CombineStackParamList } from "@/navigator/Routes";
import ProductStack from "@/navigator/ProductStackNavigator";

const Stack = createNativeStackNavigator<CombineStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer independent={true} ref={navigationRef}>
      <StatusBar backgroundColor={"transparent"} translucent />
      <Stack.Navigator
        initialRouteName={SCREEN_NAME.MAIN_STACK}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={SCREEN_NAME.MAIN_STACK} component={BottomTabHome} />
        <Stack.Screen name={SCREEN_NAME.HOME_STACK} component={HomeStack} />
        <Stack.Screen name={SCREEN_NAME.SEARCH_STACK} component={SearchStack} />

        <Stack.Screen
          name={SCREEN_NAME.CATEGORIES_STACK}
          component={CategoriesStack}
        />

        <Stack.Screen name={SCREEN_NAME.USER_STACK} component={UserStack} />
        <Stack.Screen
          name={SCREEN_NAME.PRODUCT_STACK}
          component={ProductStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
