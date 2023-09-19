import { SafeAreaView } from "react-native";
import { CHeader } from "@/components";
import { GET_COLORS } from "@/theme";
import React from "react";

const CategoriesScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: GET_COLORS()?.BACKGROUND_GRAY,
      }}
    >
      <CHeader title={"Categories"} isShowBack={true} />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
