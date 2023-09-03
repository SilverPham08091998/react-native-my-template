export const removeAllNewLineBreak = (string: string) => {
  return string
    ? string
        .replace(/\n/g, "")
        .replace(/(<br>|<\/br>|<br \/>|<br\/>|\r)/g, "\n")
    : "";
};

export const removeHtmlTag = (string: string) => {
  return string ? string.replace(/<[^>]+>/g, "") : "";
};

export const removeExtraWhiteSpace = (string: string) => {
  return string ? string.replace(/ +/g, " ") : "";
};
