import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { fontScale, scale } from "react-native-utils-scale";
import { useTranslation } from "react-i18next";
import {
  Animated,
  FlatList,
  Keyboard,
  KeyboardEvent,
  Platform,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CText, EmptyList } from "..";
import { DEVICE_WIDTH } from "@/util/constants";
import { GET_COLORS, TYPE } from "@/theme";
import { Props } from "./type";
import { styles } from "./style";

const DropdownComponent: React.FC<Props> = (props) => {
  const heightAnim = useRef(new Animated.Value(0)).current;
  const onKeyboardDidShow = (e: KeyboardEvent) => {
    Animated.timing(heightAnim, {
      useNativeDriver: false,
      toValue: Platform.OS === "android" ? 0 : e.endCoordinates.height,
      duration: 100,
    }).start();
  };

  const onKeyboardDidHide = () => {
    Animated.timing(heightAnim, {
      useNativeDriver: false,
      toValue: 0,
      duration: 100,
    }).start();
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      "keyboardDidShow",
      onKeyboardDidShow
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      onKeyboardDidHide
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const { t } = useTranslation();
  const {
    mode = "popup",
    data,
    placeholder,
    onChangeValue = () => null,
    backgroundColor = GET_COLORS().WHITE,
    zIndex,
    zIndexInverse,
    bottomOffset = 50,
    dropDownDirection = "AUTO",
    value = null,
    searchable = false,
    searchPlaceholder = t("common:search"),
    schema = { label: "label", value: "value" },
    disabled = false,
    multiple = false,
    multipleText,
    maxLength,
    textStyle,
  } = props;
  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [items, setItems] = useState(data);
  const [keyword, setKeyword] = useState("");

  useLayoutEffect(() => {
    setItems(data);
  }, [data]);

  useLayoutEffect(() => {
    if (mode === "popup" && value !== currentValue) {
      onChangeValue(value);
    }
    setCurrentValue(value);
  }, [value]);

  const onClose = () => {
    setOpen(false);
    setItems(data);
    setKeyword("");
  };

  if (mode === "popup") {
    return (
      <View>
        <TouchableOpacity
          disabled={disabled}
          style={{
            ...styles.main,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: backgroundColor,
          }}
          onPress={() => setOpen(true)}
        >
          {!currentValue || data.length === 0 ? (
            <CText color={GET_COLORS().PLACEHOLDER} fontSize={13}>
              {placeholder}
            </CText>
          ) : (
            <CText
              color={disabled ? GET_COLORS().PLACEHOLDER : GET_COLORS().BLACK_2}
              fontSize={13}
              numberOfLines={1}
              ellipseMode="tail"
              style={{ width: DEVICE_WIDTH - scale(72), ...textStyle }}
            >
              {data.find((item) => item.value === currentValue)?.label}
            </CText>
          )}
          <Ionicons
            name="chevron-down"
            size={scale(13)}
            color={disabled ? GET_COLORS().BLACK_4 : GET_COLORS().BLACK_2}
            style={{ position: "absolute", right: scale(3) }}
          />
        </TouchableOpacity>
        <Modal
          style={{ margin: 0, justifyContent: "flex-end" }}
          useNativeDriverForBackdrop
          isVisible={open}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={200}
          animationOutTiming={200}
          swipeDirection="down"
          propagateSwipe
          onBackdropPress={() => onClose()}
          onBackButtonPress={() => onClose()}
          onSwipeComplete={() => onClose()}
        >
          <Animated.View
            style={{ ...styles.modalContainer, marginBottom: heightAnim }}
          >
            <StatusBar
              backgroundColor="rgba(0,0,0,0.7)"
              barStyle="light-content"
            />
            <View style={styles.topBarModal} />
            <CText
              bold
              fontSize={16}
              color={GET_COLORS().BLACK_1}
              style={{ marginHorizontal: scale(24), marginBottom: scale(24) }}
            >
              {placeholder}
            </CText>
            <FlatList
              style={{ paddingHorizontal: scale(24) }}
              data={items}
              renderItem={({ item }: { item: any }) => {
                const selected = currentValue === item.value;
                return (
                  <TouchableOpacity
                    disabled={selected}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: scale(12),
                      marginVertical: scale(3),
                      backgroundColor: selected
                        ? "rgba(16, 156, 241, 0.08)"
                        : "#fff",
                      borderRadius: scale(10),
                    }}
                    onPress={() => {
                      onClose();
                      setCurrentValue(item.value);
                      setTimeout(() => {
                        onChangeValue(item.value);
                      }, 250);
                    }}
                  >
                    <CText
                      bold={selected}
                      fontSize={16}
                      color={
                        selected ? GET_COLORS().PRIMARY : GET_COLORS().BLACK_1
                      }
                      style={{
                        width: DEVICE_WIDTH - scale(selected ? 96 : 72),
                      }}
                    >
                      {item.label}
                    </CText>
                    {selected && (
                      <TouchableOpacity
                        onPress={() => {
                          onClose();
                          setCurrentValue("");
                          setTimeout(() => {
                            onChangeValue("");
                          }, 250);
                        }}
                      >
                        <Ionicons
                          name="close-circle"
                          size={scale(20)}
                          color={GET_COLORS().BLACK_2}
                        />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                );
              }}
              ListEmptyComponent={() => <EmptyList />}
              ListFooterComponent={() => <View style={{ height: scale(48) }} />}
            />
          </Animated.View>
        </Modal>
      </View>
    );
  }

  return (
    <DropDownPicker
      disabled={disabled}
      schema={schema}
      searchable={searchable}
      searchPlaceholder={searchPlaceholder}
      maxHeight={scale(300)}
      listMode="FLATLIST"
      flatListProps={{
        nestedScrollEnabled: true,
      }}
      placeholder={placeholder}
      disableBorderRadius={true}
      open={open}
      value={currentValue}
      items={items}
      setOpen={setOpen}
      setValue={setCurrentValue}
      setItems={setItems}
      onChangeValue={(val: any) => (val ? onChangeValue(val) : null)}
      style={{
        ...styles.main,
        borderBottomColor: open ? GET_COLORS().PRIMARY : GET_COLORS().TEXT_LINE,
      }}
      textStyle={{
        fontSize: fontScale(13),
        color: disabled ? GET_COLORS().PLACEHOLDER : GET_COLORS().BLACK_2,
      }}
      labelStyle={{
        fontFamily: TYPE.REGULAR,
      }}
      labelProps={{
        numberOfLines: 1,
      }}
      placeholderStyle={styles.placeholderStyle}
      listItemLabelStyle={{
        marginHorizontal: scale(5),
        color: GET_COLORS().BLACK_2,
        fontFamily: TYPE.REGULAR,
        fontSize: fontScale(15),
      }}
      listItemContainerStyle={{
        height: "auto",
        paddingVertical: scale(15),
        marginHorizontal: scale(8),
      }}
      ArrowUpIconComponent={() => (
        <Ionicons
          name="chevron-up"
          size={scale(13)}
          color={disabled ? GET_COLORS().BLACK_4 : GET_COLORS().BLACK_2}
          style={{ marginRight: scale(3) }}
        />
      )}
      ArrowDownIconComponent={() => (
        <Ionicons
          name="chevron-down"
          size={scale(13)}
          color={disabled ? GET_COLORS().BLACK_4 : GET_COLORS().BLACK_2}
          style={{ marginRight: scale(3) }}
        />
      )}
      showTickIcon={false}
      selectedItemContainerStyle={{
        backgroundColor: "rgba(16, 156, 241, 0.08)",
        borderRadius: scale(10),
      }}
      selectedItemLabelStyle={{
        color: GET_COLORS().PRIMARY,
        fontFamily: TYPE.SEMI_BOLD,
      }}
      dropDownContainerStyle={{
        marginTop: scale(5),
        paddingBottom: scale(8),
        paddingTop: scale(searchable ? 0 : 8),
        backgroundColor: "#fff",
        borderRadius: scale(10),
        borderColor: GET_COLORS().WHITE,
        shadowColor: GET_COLORS().PRIMARY,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 5,
        overflow: "visible",
      }}
      bottomOffset={bottomOffset}
      dropDownDirection={dropDownDirection}
      zIndex={zIndex}
      zIndexInverse={zIndexInverse}
      ListEmptyComponent={() => <EmptyList />}
      searchContainerStyle={{
        height: scale(50),
        borderBottomWidth: 0,
        marginBottom: scale(5),
      }}
      searchTextInputStyle={{
        height: scale(50),
        borderWidth: 0,
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: GET_COLORS().TEXT_LINE,
        fontSize: fontScale(15),
        color: GET_COLORS().BLACK_2,
      }}
      multiple={multiple}
      multipleText={multipleText}
    />
  );
};

export default React.memo(DropdownComponent);
