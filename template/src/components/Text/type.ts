import { TextStyle } from "react-native";
import React from "react";

export interface Props {
  fontSize?: number;
  bold?: boolean;
  color?: string;
  style?: TextStyle | TextStyle[];
  numberOfLines?: number;
  touch?: boolean;
  onPress?: () => void;
  fontFamily?: string;
  lineHeight?: number;
  ellipseMode?: "head" | "middle" | "tail" | "clip";
  copy?: boolean;
  fontWeight?: "bold" | "normal" | "400" | "500" | "600" | "700";
  children?: React.ReactNode;
}
