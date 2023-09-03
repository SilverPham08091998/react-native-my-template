import { COMMON_ACTION } from "./CommonAction";
import { CommonInitialStateType } from "./Type";
import { COLORS_LIGHT } from "@/theme";

let initialState: CommonInitialStateType = {
  theme: COLORS_LIGHT,
  language: "vi",
};

const CommonReducer = (
  state: CommonInitialStateType = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case COMMON_ACTION.CHANGE_THEME_APP: {
      return {
        ...state,
        theme: { ...action.payload },
      };
    }

    default:
      return {
        ...state,
      };
  }
};
export default CommonReducer;
