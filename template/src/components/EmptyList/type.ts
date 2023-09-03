import { StyleProp } from "react-native";
import { ImageStyle } from "react-native-fast-image";

export interface Props {
  title?: string;
  urlImage?: string;
  showImage?: boolean;
  style?: StyleProp<ImageStyle>;
}
