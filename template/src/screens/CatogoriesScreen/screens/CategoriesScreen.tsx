import { SafeAreaView } from "react-native";
import { CHeader } from "@/components";
import { GET_COLORS } from "@/theme";
import React from "react";

const CategoriesScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: GET_COLORS()?.WHITE,
      }}
    >
      <CHeader title={"Danh mục"} isShowBack={false} />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
