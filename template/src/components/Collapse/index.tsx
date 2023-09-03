import * as React from "react";
import { useCallback, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { GET_COLORS } from "@/theme";
import { scale } from "react-native-utils-scale";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Props } from "./type";
import { styles } from "./style";

const CollapseComponent: React.FC<Props> = (props: Props) => {
  const {
    height = 0,
    customRender,
    renderIconHide,
    renderIconShow,
    style,
    showSeeMore,
    title,
  } = props;
  const [show, setShow] = useState<boolean>(false);
  const animatedHeightChild = useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;
  const maxHeight = animatedHeightChild.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height],
  });
  const rotate = animatedHeightChild.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
    easing: Easing.linear,
  });

  const _handleClick = useCallback(() => {
    Animated.timing(animatedHeightChild, {
      toValue: show ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => {
      setShow(!show);
    });
  }, [show]);

  const _renderChildComponent = useCallback(() => {
    if (!customRender) {
      return null;
    }
    return customRender;
  }, [customRender]);
  const _renderButtonShow = () => {
    if (showSeeMore) {
      if (renderIconHide && renderIconShow) {
        return <View>{show ? renderIconShow : renderIconHide}</View>;
      }
      return (
        <Animated.View style={[styles.buttonMore, { transform: [{ rotate }] }]}>
          <MaterialIcon
            name="chevron-up"
            size={24}
            color={GET_COLORS().BLACK_4}
          />
        </Animated.View>
      );
    }
    return <View />;
  };
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableWithoutFeedback disabled={!showSeeMore} onPress={_handleClick}>
        <View
          style={[{ flexDirection: "row", marginHorizontal: scale(24) }, style]}
        >
          <Text style={styles.title}>{title}</Text>
          {_renderButtonShow()}
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[{ height: maxHeight }]}>
        {_renderChildComponent()}
      </Animated.View>
    </View>
  );
};

export default React.memo(CollapseComponent);
