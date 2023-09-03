import { ViewStyle } from "react-native";

export interface Props {
  mode?: "dropdown" | "popup";
  data: Array<any>;
  placeholder: string;
  onChangeValue?: (value: any) => void;
  backgroundColor?: string;
  zIndex?: number;
  zIndexInverse?: number;
  bottomOffset?: number;
  dropDownDirection?: "TOP" | "DEFAULT" | "BOTTOM" | "AUTO";
  value?: any;
  searchable?: boolean;
  searchPlaceholder?: string;
  schema?: { label: string; value: string };
  disabled?: boolean;
  multiple?: boolean;
  multipleText?: string;
  maxLength?: number;
  textStyle?: ViewStyle;
}
