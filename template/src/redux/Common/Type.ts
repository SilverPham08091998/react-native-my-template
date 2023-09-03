import { COLORS_DARK } from "@/theme";

export interface CommonInitialStateType {
  theme: typeof COLORS_DARK;
  language: string;
}

export interface ConfigFeature {
  Enable_Program_Java: string;
  Enable_Program_React_Native: string;
  Enable_Login_GraphQL: string;
  Enable_Login_Api: string;
  Enable_Login_Email_Password: string;
}
