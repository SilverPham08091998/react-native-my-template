import { StyleSheet } from "react-native";
import { scale } from "react-native-utils-scale";
import { GET_COLORS } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    borderRadius: scale(5),
  },
  controlBox: {
    position: "absolute",
    width: scale(20),
    height: scale(30),
    zIndex: 9999,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  control: {
    backgroundColor: GET_COLORS().BLACK_0,
    borderWidth: 2,
    borderColor: GET_COLORS().WHITE,
    height: scale(30),
    width: scale(30),
    borderRadius: scale(15),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: scale(1),
    opacity: 0.5,
  },
  tick: {
    backgroundColor: GET_COLORS().BLACK_0,
    borderWidth: 2,
    borderColor: GET_COLORS().WHITE,
    height: scale(8),
    width: scale(8),
    borderRadius: scale(4),
    marginBottom: scale(-2),
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 0,
    borderLeftWidth: 5,
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    opacity: 0.5,
  },
  image: {
    width: scale(20),
    height: scale(24),
  },
});
