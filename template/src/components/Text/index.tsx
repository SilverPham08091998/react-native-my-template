import React from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import { fontScale } from "react-native-utils-scale";
import Clipboard from "@react-native-community/clipboard";
import { GET_COLORS } from "@/theme";
import { Props } from "./type";

const defaultProps = {
  style: {},
  fontSize: 14,
  bold: false,
  touch: false,
  color: GET_COLORS()?.BLACK_2,
  lineHeight: undefined,
  onPress: () => null,
  ellipseMode: undefined,
  copy: false,
};

const copyText = (content: string) => {
  Clipboard.setString(content);
};

const TextComponent: React.FC<Props> = (props) => {
  const {
    touch,
    numberOfLines,
    onPress,
    fontSize = 14,
    color,
    style,
    children,
    lineHeight,
    ellipseMode,
    copy,
    fontWeight = "400",
  } = props;

  if (touch) {
    if (numberOfLines) {
      return (
        <TouchableWithoutFeedback onPress={onPress}>
          <Text
            ellipsizeMode={ellipseMode}
            style={[
              {
                fontSize: fontScale(fontSize),
                color: color,
                lineHeight: lineHeight ? lineHeight : undefined,
                fontWeight: fontWeight,
              },
              style,
            ]}
            numberOfLines={numberOfLines}
          >
            {children}
          </Text>
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <TouchableWithoutFeedback onPress={onPress}>
          <Text
            style={[
              {
                fontSize: fontScale(fontSize),
                color: color,
                lineHeight: lineHeight ? lineHeight : undefined,
                fontWeight: fontWeight,
              },
              style,
            ]}
          >
            {children}
          </Text>
        </TouchableWithoutFeedback>
      );
    }
  } else {
    if (numberOfLines) {
      return copy ? (
        <Text
          onPress={() => copyText(`${children}`)}
          ellipsizeMode={ellipseMode}
          style={[
            {
              fontSize: fontScale(fontSize),
              color: color,
              lineHeight: lineHeight ? lineHeight : undefined,
              fontWeight: fontWeight,
            },
            style,
          ]}
          numberOfLines={numberOfLines}
        >
          {children}
        </Text>
      ) : (
        <Text
          ellipsizeMode={ellipseMode}
          style={[
            {
              fontSize: fontScale(fontSize),
              color: color,
              lineHeight: lineHeight ? lineHeight : undefined,
              fontWeight: fontWeight,
            },
            style,
          ]}
          numberOfLines={numberOfLines}
        >
          {children}
        </Text>
      );
    } else {
      return copy ? (
        <Text
          onPress={() => copyText(`${children}`)}
          style={[
            {
              fontSize: fontScale(fontSize),
              color: color,
              lineHeight: lineHeight ? lineHeight : undefined,
              fontWeight: fontWeight,
            },
            style,
          ]}
        >
          {children}
        </Text>
      ) : (
        <Text
          style={[
            {
              fontSize: fontScale(fontSize),
              color: color,
              lineHeight: lineHeight ? lineHeight : undefined,
              fontWeight: fontWeight,
            },
            style,
          ]}
        >
          {children}
        </Text>
      );
    }
  }
};

TextComponent.defaultProps = defaultProps;
export default React.memo(TextComponent);
