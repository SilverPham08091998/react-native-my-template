import { StyleSheet } from "react-native";
import { scale } from "react-native-utils-scale";
import { GET_COLORS } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: scale(40),
    backgroundColor: GET_COLORS().WHITE,
    borderBottomWidth: scale(1),
    borderColor: GET_COLORS().TEXT_LINE,
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginVertical: scale(5),
  },
  textError: {
    color: GET_COLORS().RED,
    marginTop: scale(10),
    fontSize: scale(14),
  },
});
