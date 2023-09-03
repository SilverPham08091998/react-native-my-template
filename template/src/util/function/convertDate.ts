import moment from "moment";

const convertDateMicro = (date: number, format: string) => {
  return moment(date).format(format);
};

const convertTextDateToDate = (value: any) => {
  if (value === null || value === undefined || value === "" || value < 0) {
    return "";
  }
  let fullDate = new Date(value * 1000);
  if (fullDate.getFullYear() <= 1900) {
    return "";
  }
  return fullDate;
};
const convertTime = (seconds: number) => {
  let mins = parseInt("", seconds / 60)
    .toString()
    .padStart(2, "0");
  let secs = (Math.trunc(seconds) % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

export { convertDateMicro, convertTextDateToDate, convertTime };
