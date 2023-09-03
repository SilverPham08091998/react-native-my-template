import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";

export interface Props {
  title?: string;
  password?: boolean;
  isSecured?: boolean;
  value: string;
  onChangeText?: any;
  inputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  multiline?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  editable?: boolean;
  onBlur?: any;
  trailing?: React.ReactNode | null;
  circular?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onBackspacePress?: any;
  textSize?: number;
  enableFocusChangeBorder?: boolean;
  showErrorBorder?: boolean;
  leading?: React.ReactNode;
  placeholderTextColor?: string;
  error?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  clearButton?: boolean;
  maxLength?: number;
  isIconSearch?: boolean;
  onEndEditing?: () => void;
  autoFocus?: boolean;
  titleStyle?: TextStyle;
}
