import { ViewStyle } from "react-native";

export interface Props {
  check?: boolean;
  size?: number;
  style?: ViewStyle;
  onPress?: any;
  type?: "checkbox" | "radio";
  disabled?: boolean;
}
