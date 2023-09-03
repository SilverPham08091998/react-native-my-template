import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { scale } from "react-native-utils-scale";
import { COLORS_LIGHT } from "@/theme";
import { SCREEN_NAME } from "@/util/constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CText } from "@/components";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const iconTabBar = () => {
          let icon_name: string = "";
          switch (route.name) {
            case SCREEN_NAME.HOME_STACK:
              icon_name = "home-outline";
              break;
            case SCREEN_NAME.CATEGORIES_STACK:
              icon_name = "analytics";
              break;
            case SCREEN_NAME.SEARCH_STACK:
              icon_name = "search";
              break;
            case SCREEN_NAME.USER_STACK:
              icon_name = "timer-outline";
              break;
            default:
              icon_name = "home-outline";
              break;
          }
          return icon_name;
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              ...styles.item,
              height: scale(50),
              borderTopWidth: isFocused ? scale(2) : 0,
              borderTopColor: isFocused
                ? COLORS_LIGHT.PRIMARY
                : COLORS_LIGHT.WHITE,
            }}
          >
            <Ionicons
              name={iconTabBar()}
              size={24}
              color={isFocused ? COLORS_LIGHT.PRIMARY : COLORS_LIGHT.LINE_3}
            />
            <CText
              color={isFocused ? COLORS_LIGHT.PRIMARY : COLORS_LIGHT.LINE_3}
              fontWeight={"700"}
              fontSize={10}
            >
              {/*// @ts-ignore*/}
              {label}
            </CText>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS_LIGHT.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  item: {
    height: scale(90),
    flex: 1,
    backgroundColor: COLORS_LIGHT.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
});
