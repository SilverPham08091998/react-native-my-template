import { View } from "react-native";
import { CImage, CText } from "..";
import React from "react";
import { GET_COLORS, IMAGE_URL } from "@/theme";
import { useTranslation } from "react-i18next";
import { scale } from "react-native-utils-scale";
import { Props } from "./type";
import { styles } from "./style";

const EmptyList: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const {
    title = t("common:emptyTitle"),
    urlImage = IMAGE_URL.avatar,
    showImage = false,
    style,
  } = props;
  return (
    <View style={styles.container}>
      {showImage && (
        <View style={{ marginVertical: scale(12) }}>
          <CImage
            style={{ ...styles.image, style }}
            url={urlImage}
            resizeMode={"contain"}
          />
        </View>
      )}
      <CText color={GET_COLORS()?.BLACK_4} fontSize={16}>
        {title}
      </CText>
    </View>
  );
};

export default React.memo(EmptyList);
