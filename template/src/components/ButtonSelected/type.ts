import {
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";

export interface Props {
  type?: "custom" | "text" | "color" | "image";
  text?: string;
  image?: ImageSourcePropType;
  color?: string;
  children?: () => React.ReactNode;
  containerStyle?: ViewStyle;
  isSelected?: boolean;
  textStyle?: TextStyle;
  imageStyle?: ImageStyle;
  colorStyle?: ViewStyle;
  containerStyleSelected?: ViewStyle;
  value?: any;
  onSelected?: (value: any) => void;
}
