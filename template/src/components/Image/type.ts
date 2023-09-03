import { ImageStyle, StyleProp } from "react-native";

export interface ImageProps {
  source?: any;
  url?: string;
  style?: any | StyleProp<ImageStyle>;
  resizeMode?: "contain" | "cover" | "stretch" | "repeat" | "center";
  onPress?: any;
  touch?: boolean;
  defaultImg?: any;
  disableDefault?: boolean;
  tintColor?: string;
}
