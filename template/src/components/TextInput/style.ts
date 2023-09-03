import { StyleSheet } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import { GET_COLORS } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: scale(40),
    borderBottomWidth: scale(1),
    borderColor: GET_COLORS().TEXT_LINE,
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    padding: 0,
    fontSize: fontScale(13),
    color: GET_COLORS().BLACK_2,
  },
  right: {
    marginLeft: scale(8),
  },
  multiline: {
    textAlignVertical: "top",
    height: "100%",
  },
});
