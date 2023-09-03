import { StyleSheet } from "react-native";
import { GET_COLORS } from "@/theme";
import { scale } from "react-native-utils-scale";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GET_COLORS().WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: scale(50),
    height: scale(50),
  },
});
