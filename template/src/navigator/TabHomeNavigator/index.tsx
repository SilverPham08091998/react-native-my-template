import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { SCREEN_NAME } from "@/util/constants";
import HomeStack from "./Home";
import CategoriesStack from "./Categories";
import UserStack from "./User";
import SearchStack from "@/navigator/TabHomeNavigator/Search";
import { DotTabBar } from "./components";

const BottomTab = createBottomTabNavigator();

const EmptyComponent = () => null;
const tabs = [
  {
    name: SCREEN_NAME.HOME_STACK,
  },
  { name: SCREEN_NAME.CATEGORIES_STACK },
  { name: "Optional" },
  { name: SCREEN_NAME.SEARCH_STACK },
  { name: SCREEN_NAME.USER_STACK },
];

const BottomTabHome = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: BottomTabBarProps) => (
        <DotTabBar tabs={tabs} state={props.state} bottomBarProps={props} />
      )}
    >
      <BottomTab.Screen
        options={{
          title: "Trang chủ",
        }}
        name={SCREEN_NAME.HOME_STACK}
        component={HomeStack}
      />
      <BottomTab.Screen
        options={{
          title: "Danh mục",
        }}
        name={SCREEN_NAME.CATEGORIES_STACK}
        component={CategoriesStack}
      />
      <BottomTab.Screen name={"Optional"} component={EmptyComponent} />

      <BottomTab.Screen
        options={{
          title: "Tìm kiếm",
        }}
        name={SCREEN_NAME.SEARCH_STACK}
        component={SearchStack}
      />
      <BottomTab.Screen
        options={{
          title: "Tài khoản",
        }}
        name={SCREEN_NAME.USER_STACK}
        component={UserStack}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabHome;
