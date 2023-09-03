import React, { useImperativeHandle, useState } from "react";
import {
  Modal,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { scale } from "react-native-utils-scale";
import { GET_COLORS } from "@/theme";
import { CText } from "@/components";
import { styles } from "./style";

export const globalMessageRef = React.createRef<any>();

interface GlobalMessageState {
  title: string;
  content: string;
  action?: () => void;
}

export const globalMessage = {
  show: (value: GlobalMessageState) => {
    globalMessageRef?.current?.show(value);
  },
};
const GlobalMessage = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<GlobalMessageState>({
    title: "Warning",
    content: "You call Charles Chapo. Would you like to log it ?",
  });
  useImperativeHandle(ref, () => {
    return { show: show };
  });

  const show = (value: GlobalMessageState) => {
    setVisible(true);
    setData(value);
  };
  const { title, content, action } = data;
  return (
    <Modal
      style={styles.main}
      visible={visible}
      animationType={"none"}
      transparent
    >
      <StatusBar
        translucent
        backgroundColor={"rgba(0,0,0,0.6)"}
        barStyle={"light-content"}
      />
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View style={styles.main}>
          <View style={styles.boxContent}>
            <View style={styles.content}>
              <View style={styles.title}>
                <CText bold fontSize={19} color={GET_COLORS().BLACK_0}>
                  {title}
                </CText>
              </View>
              <View style={styles.message}>
                <CText
                  fontSize={15}
                  color={GET_COLORS().BLACK_0}
                  lineHeight={scale(22)}
                  style={{ textAlign: "center" }}
                >
                  {content}
                </CText>
              </View>

              <View style={styles.separator} />

              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                  if (action) {
                    action();
                  }
                }}
              >
                <CText
                  bold
                  fontSize={17}
                  color={GET_COLORS().PRIMARY}
                  style={{ paddingVertical: scale(11) }}
                >
                  Xác nhận
                </CText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

export default React.memo(GlobalMessage);
