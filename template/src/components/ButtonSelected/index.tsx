import React from "react";
import { TouchableOpacity, View } from "react-native";
import { CImage, CText } from "@/components";
import { GET_COLORS, IMAGE_URL } from "@/theme";
import { Props } from "./type";
import { styles } from "./style";

const ButtonSelected: React.FC<Props> = (props: Props) => {
  const {
    type = "text",
    text = "",
    textStyle,
    colorStyle,
    imageStyle,
    color = GET_COLORS().PRIMARY,
    image = IMAGE_URL.avatar,
    isSelected = false,
    containerStyleSelected,
    containerStyle,
    onSelected = () => {},
    value,
  } = props;
  const renderContent = () => {
    switch (type) {
      case "text":
        return (
          <CText
            fontSize={13}
            color={isSelected ? GET_COLORS().PRIMARY : GET_COLORS().BLACK_4}
            style={{
              ...textStyle,
              color: isSelected ? GET_COLORS().PRIMARY : GET_COLORS().BLACK_4,
              fontWeight: isSelected ? "700" : "400",
            }}
            fontWeight={isSelected ? "700" : "400"}
          >
            {text}
          </CText>
        );
      case "image":
        return (
          <CImage source={image} style={[styles.imageStyle, imageStyle]} />
        );
      case "color":
        return (
          <View
            style={[styles.viewStyle, { backgroundColor: color }, colorStyle]}
          />
        );
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: isSelected ? GET_COLORS().PRIMARY : GET_COLORS().PRIMARY,
        },
        containerStyle,
        isSelected ? containerStyleSelected : {},
      ]}
      onPress={() => {
        onSelected(value);
      }}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

export default ButtonSelected;
