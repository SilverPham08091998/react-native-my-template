import { StyleSheet } from "react-native";
import { scale } from "react-native-utils-scale";
import { GET_COLORS, rgba } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: scale(12),
  },
  button: {
    flexDirection: "row",
    backgroundColor: rgba(GET_COLORS().BLACK_0, 0.05),
    borderRadius: scale(30),
    paddingHorizontal: scale(12),
    paddingVertical: scale(4),
    marginLeft: scale(8),
  },
  line: {
    width: scale(2),
    backgroundColor: GET_COLORS().TEXT_LINE,
    marginHorizontal: scale(4),
  },
});
