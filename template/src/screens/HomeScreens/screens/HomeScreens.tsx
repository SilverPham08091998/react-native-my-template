import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { COLORS_LIGHT, GET_COLORS } from "@/theme";
import { scale } from "react-native-utils-scale";
import { CButton, CHeader } from "@/components";
import { navigate, SCREEN_NAME } from "@/util/constants";

const HomeScreens = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CHeader title={"Tên gian hàng"} />
      <ScrollView style={{ flex: 1 }} nestedScrollEnabled={true} />
      <CButton
        title={"Navigate"}
        onPress={() => {
          navigate(SCREEN_NAME.PRODUCT_STACK, SCREEN_NAME.PRODUCT, {
            userId: "userId",
            count: 0,
          });
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GET_COLORS().WHITE,
    flex: 1,
  },
  line: {
    backgroundColor: COLORS_LIGHT.BACKGROUND_GRAY,
    width: "100%",
    height: scale(8),
    marginTop: scale(8),
  },
});
