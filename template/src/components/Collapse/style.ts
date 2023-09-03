import { StyleSheet } from "react-native";
import { GET_COLORS, TYPE } from "@/theme";
import { fontScale } from "react-native-utils-scale";

export const styles = StyleSheet.create({
  buttonMore: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: GET_COLORS().PRIMARY,
    fontFamily: TYPE.BOLD,
    fontWeight: "700",
    fontSize: fontScale(18),
    flex: 1,
  },
  textContent: {
    fontSize: fontScale(18),
    fontFamily: TYPE.SEMI_BOLD,
    fontWeight: "600",
  },
});
