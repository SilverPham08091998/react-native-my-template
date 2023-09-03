import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface Props {
  title?: string;
  showSeeMore?: boolean;
  customRender?: React.ReactNode | null;
  renderIconHide?: React.ReactNode | null;
  renderIconShow?: React.ReactNode | null;
  height?: number;
  style?: StyleProp<ViewStyle>;
}
