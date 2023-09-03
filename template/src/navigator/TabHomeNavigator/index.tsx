import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { SCREEN_NAME } from "@/util/constants";
import HomeStack from "./Home";
import CategoriesStack from "./Categories";
import UserStack from "./User";
import { StyleSheet } from "react-native";
import { scale } from "react-native-utils-scale";
import TabBar from "@/navigator/TabHomeNavigator/components/TabBar";
import SearchStack from "@/navigator/TabHomeNavigator/Search";

const BottomTab = createBottomTabNavigator();

const BottomTabHome = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
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

const styles = StyleSheet.create({
  flexAlignCenter: {
    alignItems: "center",
  },
  paddingSm: {
    padding: scale(8),
    width: scale(24),
    height: scale(24),
    borderRadius: scale(100),
  },
});

export default BottomTabHome;
