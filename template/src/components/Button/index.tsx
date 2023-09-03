import React, { useEffect, useRef } from "react";
import { Animated, Easing, TouchableOpacity } from "react-native";
import { UIActivityIndicator } from "react-native-indicators";
import { fontScale, scale } from "react-native-utils-scale";
import { CText } from "..";
import { GET_COLORS } from "@/theme";
import { Props } from "./type";
import { styles } from "./style";
import createAnimatedComponent = Animated.createAnimatedComponent;

const defaultProps = {
  backgroundColor: "",
  style: {},
  textColor: "",
  fontSize: null,
  border: false,
  onPress: () => null,
  primaryColor: null,
  disabled: false,
  bold: true,
  enableAnimation: false,
};
const TouchableOpacityAnimation = createAnimatedComponent(TouchableOpacity);
const ButtonComponent: React.FC<Props> = (props) => {
  const animation = useRef(new Animated.Value(0)).current;
  const {
    fontSize,
    backgroundColor,
    style,
    textColor,
    title,
    onPress,
    border,
    primaryColor,
    disabled,
    bold,
    shadow,
    loading,
    enableAnimation,
  } = props;

  useEffect(() => {
    if (enableAnimation) {
      Animated.timing(animation, {
        toValue: disabled ? 0 : 1,
        useNativeDriver: false,
        duration: 300,
        easing: Easing.linear,
      }).start();
    }
  }, [disabled, enableAnimation]);
  const translateBottom = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-200, -100, 0],
    extrapolate: "clamp",
  });

  if (border) {
    return (
      <Animated.View
        style={[
          styles.viewBorderAnimation,
          enableAnimation && {
            marginBottom: translateBottom,
            ...styles.shadowViewAnimation,
          },
        ]}
      >
        <TouchableOpacityAnimation
          disabled={disabled}
          onPress={() => onPress()}
          style={[
            styles.container,
            {
              borderColor:
                textColor === ""
                  ? primaryColor || GET_COLORS().TEXT_LINE
                  : textColor,
              borderWidth: scale(1),
              backgroundColor: backgroundColor
                ? backgroundColor
                : GET_COLORS().WHITE,
            },
            shadow && {
              shadowColor: backgroundColor
                ? backgroundColor
                : GET_COLORS().PRIMARY,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 2,
            },
            style,
          ]}
        >
          <CText
            bold
            style={[
              styles.text,
              {
                color:
                  textColor === ""
                    ? primaryColor || GET_COLORS().WHITE
                    : textColor,
              },
              fontSize && { fontSize: fontScale(fontSize) },
            ]}
          >
            {title}
          </CText>
        </TouchableOpacityAnimation>
      </Animated.View>
    );
  }

  return (
    <Animated.View
      style={[
        styles.viewBorderAnimation,
        enableAnimation && {
          marginBottom: translateBottom,
          ...styles.shadowViewAnimation,
        },
      ]}
    >
      <TouchableOpacityAnimation
        disabled={disabled || loading}
        onPress={() => onPress()}
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor
              ? backgroundColor
              : GET_COLORS().PRIMARY,
          },
          shadow && {
            shadowColor: backgroundColor
              ? backgroundColor
              : GET_COLORS().PRIMARY,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 2,
          },

          style,
        ]}
      >
        {loading ? (
          <UIActivityIndicator color="white" size={scale(24)} />
        ) : (
          <CText
            bold={bold}
            style={[
              styles.text,
              { color: textColor === "" ? GET_COLORS().WHITE : textColor },
              fontSize && { fontSize: fontScale(fontSize) },
            ]}
          >
            {title}
          </CText>
        )}
      </TouchableOpacityAnimation>
    </Animated.View>
  );
};

ButtonComponent.defaultProps = defaultProps;
export default React.memo(ButtonComponent);
