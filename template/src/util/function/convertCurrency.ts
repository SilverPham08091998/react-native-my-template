import "intl";
import "intl/locale-data/jsonp/en";

const formatterVI = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "VND",
});

export const convertCurrency = (billOfMount: any) => {
  return (
    formatterVI
      .format(billOfMount)
      .replace(/[a-zA-Z₫]/g, "")
      .replace(/,/g, ".")
      .trim() + " ₫"
  );
};
