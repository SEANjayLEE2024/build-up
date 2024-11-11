export const ClubFeeFomatter = (clubFee: string) => {
  const removedComma = Number(
    clubFee
      .split(`,`)
      .filter((char) => char !== ",")
      .join(``)
  );
  const addComma = removedComma.toLocaleString();

  return addComma;
};
