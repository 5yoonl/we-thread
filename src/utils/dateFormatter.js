export const dateFormatter = (date) => {
  // date should be string
  const month = new Date(date).getMonth() + 1;
  const isUnderOctober = month < 10;
  const dateObject = new Intl.DateTimeFormat("kr").format(new Date(date));
  const formattingDate = isUnderOctober
    ? dateObject.substring(2, 11)
    : dateObject.substring(2, 12);

  return formattingDate;
};
