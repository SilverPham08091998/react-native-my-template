const COMMON_ACTION = {
  CHANGE_THEME_APP: "CHANGE_THEME_APP",
  CHANGE_LANGUAGE_APP: "CHANGE_LANGUAGE_APP",
};

const changeThemeApp = (payload: any) => {
  return {
    type: COMMON_ACTION.CHANGE_THEME_APP,
    payload: payload,
  };
};

const changeLanguageApp = (payload: any) => {
  return {
    type: COMMON_ACTION.CHANGE_THEME_APP,
    payload: payload,
  };
};

export { changeThemeApp, COMMON_ACTION, changeLanguageApp };
