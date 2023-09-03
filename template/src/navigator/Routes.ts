import { ProductStackParamList } from "./ProductStackNavigator/ProductStackParamList";
import { CategoriesStackParamList } from "@/navigator/TabHomeNavigator/Categories/CategoriesStackParamsList";
import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  MAIN_STACK: undefined;
  HOME_STACK: undefined;
  CATEGORIES_STACK: undefined;
  USER_STACK: undefined;
  SEARCH_STACK: undefined;
  PRODUCT_STACK: undefined | { screen: string; params?: any };
};
export type { ProductStackParamList, CategoriesStackParamList };

export type CombineStackParamList = RootStackParamList & ProductStackParamList;
export type StackNavigation = NavigationProp<CombineStackParamList>;
