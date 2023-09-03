import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, View } from "react-native";
import { scale } from "react-native-utils-scale";
import { GET_COLORS, IMAGE_URL } from "@/theme";
import { CText } from "@/components";
import { Props } from "./type";
import { styles } from "./style";

const defaultProps = {
  color: [
    { color: GET_COLORS().RED, percent: 33.33 },
    { color: GET_COLORS().YELLOW, percent: 33.33 },
    { color: GET_COLORS().GREEN, percent: 33.33 },
  ],
  border: false,
  height: scale(4),
  left: 0,
};

let iPercent: number = 100;

const ProgressComponent: React.FC<Props> = (props) => {
  const { percent, color, height, border, left = 0 } = props;
  const [controlColor, setControlColor] = useState(GET_COLORS().BLACK_0);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (color) {
      iPercent = Number(Number(100 / color.length).toFixed(2));
      const index = Math.ceil((100 - percent) / iPercent);
      const findColor =
        index < 1
          ? color[index]?.color
          : index > color.length
          ? color[color.length - 1]?.color
          : color[index - 1]?.color;
      setControlColor(findColor);
      Animated.timing(animation, {
        toValue: findColor ? 1 : 0,
        easing: Easing.linear,
        duration: percent > 50 ? 1000 : 2000,
        useNativeDriver: false,
      }).start();
    }
  }, [percent, color]);

  const translate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", `${100 - percent - left}%`],
  });
  return (
    <View style={{ alignItems: "flex-start", justifyContent: "flex-end" }}>
      <Animated.View
        style={[
          {
            left: translate,
          },
          styles.controlBox,
        ]}
      >
        <View>
          <Image
            source={IMAGE_URL.avatar}
            style={[
              {
                tintColor: controlColor,
              },
              styles.image,
            ]}
            resizeMode={"contain"}
          />
          <View
            style={{
              position: "absolute",
              top: 2,
              width: scale(20),
              height: scale(14),
              alignItems: "center",
            }}
          >
            <CText color={GET_COLORS().WHITE} fontSize={10}>
              {percent}
            </CText>
          </View>
        </View>
        <View style={[styles.tick, { backgroundColor: controlColor }]} />
      </Animated.View>
      <View style={[styles.container, { height: height }]}>
        {color &&
          color.map((item, index) => (
            <View
              key={index}
              style={[
                {
                  backgroundColor: item.color,
                  width: `${item.percent}%`,
                  opacity: item.color === controlColor ? 1 : 0.4,
                },
                border &&
                  index === 0 && {
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                  },
                border &&
                  index === color.length - 1 && {
                    borderTopRightRadius: scale(5),
                    borderBottomRightRadius: scale(5),
                  },
              ]}
            />
          ))}
      </View>
    </View>
  );
};

ProgressComponent.defaultProps = defaultProps;

export default React.memo(ProgressComponent);
