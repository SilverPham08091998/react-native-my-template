import { TextStyle, ViewStyle } from "react-native";

export interface Props {
  title: string;
  isShowBack?: boolean;
  onBack?: () => void;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  onPressCart?: () => void;
  onPressCancel?: () => void;
  onPressMore?: () => void;
}
