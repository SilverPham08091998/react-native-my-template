import React, { useLayoutEffect, useState } from "react";
import { Image, TouchableWithoutFeedback, View } from "react-native";
import { scale } from "react-native-utils-scale";
import { IMAGE_URL } from "@/theme";
import { Props } from "@/components/Check/type";
import { styles } from "@/components/Check/style";

const CheckComponent: React.FC<Props> = (props) => {
  const {
    style,
    size = 24,
    type,
    check = false,
    onPress,
    disabled = false,
  } = props;
  const [active, setActive] = useState(false);

  const getSource = () => {
    if (type === "checkbox") {
      return active ? IMAGE_URL.checkBoxActive : IMAGE_URL.checkBoxInactive;
    } else {
      return active ? IMAGE_URL.radioActive : IMAGE_URL.radioInactive;
    }
  };

  useLayoutEffect(() => {
    setActive(check);
  }, [check]);

  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image
          style={{
            width: scale(size),
            height: scale(size),
            tintColor: disabled ? "#c2cfe0" : undefined,
          }}
          source={getSource()}
          resizeMode="contain"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(CheckComponent);
