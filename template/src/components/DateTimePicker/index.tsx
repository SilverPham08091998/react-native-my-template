import moment from "moment";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableWithoutFeedback, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { scale } from "react-native-utils-scale";
import { CText } from "..";
import { GET_COLORS } from "@/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Props } from "./type";
import { styles } from "./style";

const defaultProps = {
  style: {},
  value: undefined,
  onConfirm: () => null,
  color: GET_COLORS().PLACEHOLDER,
  fontSize: 14,
};

const DateTimerPicker: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState<boolean>(false);

  const {
    style,
    label,
    value,
    mode,
    textError,
    textErrorStyle,
    onConfirm = () => null,
    color,
    minDate,
    maxDate,
    fontSize,
    disabled,
    placeholder,
    formatMonthDay,
  } = props;

  const displayPlaceholder = placeholder
    ? placeholder
    : mode === "date"
    ? "dd/mm/yyyy"
    : "hh:mm";
  return (
    <View
      pointerEvents={disabled ? "none" : "auto"}
      style={{
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <View style={[styles.container, style]}>
        {label && (
          <CText
            style={styles.title}
            color={GET_COLORS().PLACEHOLDER}
            fontSize={16}
          >
            {label}
          </CText>
        )}
        <TouchableWithoutFeedback onPress={() => setVisible(true)}>
          <View style={styles.row}>
            <CText
              fontSize={fontSize}
              color={
                value === undefined
                  ? GET_COLORS().BLACK_4
                  : GET_COLORS().BLACK_2
              }
            >
              {value === undefined
                ? displayPlaceholder
                : moment(value).format(
                    mode === "date" && formatMonthDay
                      ? "MM/DD/YYYY"
                      : mode === "time"
                      ? "h:s"
                      : mode === "datetime"
                      ? "DD/MM/yy HH:mm"
                      : "DD/MM/yy"
                  )}
            </CText>
            <Ionicons name={"calendar"} size={scale(24)} color={color} />
          </View>
        </TouchableWithoutFeedback>
        <DateTimePickerModal
          isVisible={visible}
          mode={mode}
          date={value}
          onConfirm={(date) => {
            setVisible(false);
            onConfirm(date);
          }}
          onCancel={() => setVisible(false)}
          minimumDate={minDate}
          maximumDate={maxDate}
          confirmTextIOS={t("common:confirm")}
          cancelTextIOS={t("common:cancel")}
        />
      </View>
      {textError && (
        <CText style={[styles.textError, textErrorStyle]}>{textError}</CText>
      )}
    </View>
  );
};

DateTimerPicker.defaultProps = defaultProps;

export default React.memo(DateTimerPicker);
