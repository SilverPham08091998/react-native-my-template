import { StyleSheet } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import { GET_COLORS } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    height: scale(50),
    borderRadius: scale(8),
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scale(10),
    flexDirection: "row",
    width: "100%",
  },
  viewBorderAnimation: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scale(24),
    paddingHorizontal: scale(24),
    borderRadius: 12,
  },
  shadowViewAnimation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: GET_COLORS().WHITE,
  },
  text: {
    color: "white",
    fontSize: fontScale(16),
    textAlign: "center",
  },
});
