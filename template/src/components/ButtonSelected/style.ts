import { StyleSheet } from "react-native";
import { GET_COLORS } from "@/theme";
import { scale } from "react-native-utils-scale";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GET_COLORS().WHITE,
    borderRadius: scale(12),
    borderWidth: scale(1),
    borderColor: "#DDDDE3",
  },

  imageStyle: {
    width: scale(40),
    height: scale(40),
  },
  viewStyle: {
    width: scale(40),
    height: scale(40),
  },
});
