import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface Props {
  style?: ViewStyle;
  label?: string;
  value?: Date;
  mode: "date" | "time" | "datetime";
  textErrorStyle?: StyleProp<TextStyle> | any;
  onConfirm?: (date: Date) => void;
  textError?: string | null;
  color?: string;
  minDate?: Date;
  maxDate?: Date;
  fontSize?: number;
  disabled?: boolean;
  placeholder?: string;
  formatMonthDay?: boolean;
}
