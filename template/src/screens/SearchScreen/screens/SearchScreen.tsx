import { View } from "react-native";
import { CText } from "@/components";
import { GET_COLORS } from "@/theme";
import React from "react";

const SearchScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: GET_COLORS()?.WHITE,
      }}
    >
      <CText>Search</CText>
    </View>
  );
};

export default SearchScreen;
