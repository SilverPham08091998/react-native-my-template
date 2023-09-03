import React, { useEffect, useRef } from "react";
import { Animated, Pressable } from "react-native";
import { GET_COLORS } from "@/theme";
import { Props } from "./type";
import { styles } from "./style";

const ComponentSwitch: React.FC<Props> = (props: Props) => {
  const {
    handleOnPress,
    value,
    activeTrackColor = props.disable
      ? GET_COLORS().GRAY_1
      : GET_COLORS().PRIMARY,
    inActiveTrackColor = GET_COLORS().TEXT_LINE,
    thumbColor = GET_COLORS().WHITE,
    disable,
  } = props;
  const switchTranslate = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (value) {
      Animated.spring(switchTranslate, {
        toValue: 22,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(switchTranslate, {
        toValue: 0,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
        useNativeDriver: false,
      }).start();
    }
  }, [value, switchTranslate]);
  const interpolateBackgroundColor = switchTranslate.interpolate({
    inputRange: [0, 22],
    outputRange: [inActiveTrackColor, activeTrackColor],
  });

  const memoizedOnSwitchPressCallback = React.useCallback(() => {
    handleOnPress(!value);
  }, [handleOnPress, value]);

  return (
    <Pressable onPress={memoizedOnSwitchPressCallback} disabled={disable}>
      <Animated.View
        style={[
          styles.containerStyle,
          { backgroundColor: interpolateBackgroundColor },
        ]}
      >
        <Animated.View
          style={[
            styles.circleStyle,
            { backgroundColor: thumbColor },
            {
              transform: [
                {
                  translateX: switchTranslate,
                },
              ],
            },
            styles.shadowValue,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

export default React.memo(ComponentSwitch);
