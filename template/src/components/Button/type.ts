import { ViewStyle } from "react-native";

export interface Props {
  title?: string;
  textColor?: string;
  backgroundColor?: string;
  style?: ViewStyle | ViewStyle[];
  fontSize?: number | any;
  onPress: () => void;
  border?: boolean;
  primaryColor?: string | null;
  disabled?: boolean;
  bold?: boolean;
  shadow?: boolean;
  loading?: boolean;
  enableAnimation?: boolean;
}
