import { StyleSheet } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import { GET_COLORS, TYPE } from "@/theme";

export const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: scale(40),
    paddingHorizontal: scale(-10),
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: GET_COLORS().TEXT_LINE,
  },
  placeholderStyle: {
    color: GET_COLORS().PLACEHOLDER,
    fontFamily: TYPE.REGULAR,
    fontSize: fontScale(13),
  },
  modalContainer: {
    backgroundColor: GET_COLORS().WHITE,
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    marginTop: scale(300),
  },
  topBarModal: {
    alignSelf: "center",
    marginTop: scale(20),
    marginBottom: scale(20),
    width: scale(70),
    height: scale(6),
    backgroundColor: "#E4E4E4",
  },
});
