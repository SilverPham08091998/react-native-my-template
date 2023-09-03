import React, {
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { fontScale, scale } from "react-native-utils-scale";
import { GET_COLORS, TYPE } from "@/theme";
import { CText } from "../index";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Props } from "./type";
import { styles } from "./style";

const CInput = React.forwardRef((props: Props, ref) => {
  const {
    isSecured,
    value,
    onChangeText,
    placeholder,
    multiline,
    editable = true,
    inputStyle,
    containerStyle,
    onBlur,
    password,
    circular,
    keyboardType,
    title,
    onBackspacePress,
    textSize,
    enableFocusChangeBorder,
    showErrorBorder,
    leading,
    trailing,
    placeholderTextColor,
    error,
    autoCapitalize,
    clearButton,
    maxLength,
    isIconSearch,
    onEndEditing,
    autoFocus = false,
    titleStyle,
  } = props;

  const [stateTextValue, updateStateTextValue] = useState(value || "");

  const [passwordSecure, setPasswordSecure] = useState(password === true);

  const [focused, setFocused] = useState(false);

  const inputRef = React.useRef<TextInput>(null);

  const focusInput = () => inputRef.current?.focus();
  const blurInput = () => inputRef.current?.blur();
  const clear = () => {
    inputRef.current?.clear();
    updateStateTextValue("");
    onChangeText && onChangeText("");
  };
  const updateValue = (value: string) => {
    updateStateTextValue(value);
    onChangeText && onChangeText(value);
  };

  const getValue = () => stateTextValue;

  useImperativeHandle(
    ref,
    () => {
      return {
        focusInput,
        blurInput,
        clear,
        updateValue,
        getValue,
      };
    },
    []
  );

  useEffect(() => {
    if (value !== stateTextValue) {
      updateStateTextValue(value || "");
    }
  }, [value]);

  useLayoutEffect(() => {
    updateStateTextValue(value || "");
  }, [onChangeText]);

  const renderRightElement = () => {
    if (password) {
      return (
        <View style={styles.right}>
          <TouchableOpacity onPress={() => setPasswordSecure(!passwordSecure)}>
            <Ionicons
              size={scale(20)}
              color={GET_COLORS()?.BLACK_4}
              name={passwordSecure ? "eye-off" : "eye"}
            />
          </TouchableOpacity>
        </View>
      );
    }
    if (clearButton && stateTextValue.length > 0) {
      return (
        <View style={styles.right}>
          <TouchableOpacity onPress={() => clear()} disabled={!editable}>
            <Ionicons
              size={scale(20)}
              color={GET_COLORS().BLACK_3}
              name={"close"}
            />
          </TouchableOpacity>
        </View>
      );
    }
    return trailing;
  };

  return (
    <View>
      {title ? (
        <CText
          style={titleStyle}
          fontSize={16}
          color={GET_COLORS()?.BLACK_1}
          fontWeight={"700"}
        >
          {title}
        </CText>
      ) : (
        <View />
      )}
      <View
        style={[
          styles.container,
          circular ? { borderRadius: 100 } : {},
          multiline ? { height: scale(48), marginTop: scale(5) } : {},
          containerStyle,
          focused ? { borderColor: GET_COLORS()?.PRIMARY } : {},
          showErrorBorder ? { borderColor: GET_COLORS().RED } : {},
          { opacity: editable ? 1 : 0.5 },
        ]}
      >
        {leading}
        {isIconSearch && (
          <Ionicons
            name="search"
            size={scale(18)}
            color={GET_COLORS().BLACK_4}
            style={{ marginRight: scale(5) }}
          />
        )}
        <TextInput
          ref={inputRef}
          keyboardType={keyboardType}
          placeholderTextColor={
            placeholderTextColor
              ? placeholderTextColor
              : GET_COLORS().PLACEHOLDER
          }
          style={[
            styles.inputStyle,
            multiline ? styles.multiline : {},
            inputStyle,
            textSize ? { fontSize: fontScale(textSize) } : {},
          ]}
          secureTextEntry={password ? passwordSecure : isSecured || false}
          value={stateTextValue}
          onChangeText={(text) => {
            updateStateTextValue(text);
            if (onChangeText) {
              onChangeText(text);
            }
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              onBackspacePress && onBackspacePress();
            }
          }}
          onFocus={() => {
            enableFocusChangeBorder && setFocused(true);
          }}
          onBlur={(e) => {
            enableFocusChangeBorder && setFocused(false);
            onBlur && onBlur(e);
          }}
          underlineColorAndroid={"transparent"}
          autoCapitalize={autoCapitalize ? autoCapitalize : "none"}
          returnKeyType={"done"}
          maxLength={maxLength ? maxLength : (null as any)}
          placeholder={placeholder || ""}
          multiline={multiline || false}
          autoFocus={autoFocus}
          editable={editable}
          onEndEditing={onEndEditing}
        />
        {renderRightElement()}
      </View>
      {error ? (
        <CText
          fontFamily={TYPE.ITALIC}
          fontSize={12}
          color={GET_COLORS().RED}
          style={{ marginTop: scale(5) }}
        >
          {error}
        </CText>
      ) : (
        <View />
      )}
    </View>
  );
});

export default CInput;
