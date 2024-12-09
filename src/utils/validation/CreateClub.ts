const ConsonantAndVowel = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
];

//자음 모음
export const validationClubName = (clubName: string): boolean => {
  return validateWhiteSpace(clubName);
};

export const validateAlphaNumericKorea = (value: string) => {
  const valueArray = value.split(``);
  for (let i = 0; i < valueArray.length; i++) {
    if (ConsonantAndVowel.includes(valueArray[i])) {
      return false;
    }
  }
  // 모음, 자음만 있는 Input 검증

  const regex = /^[a-zA-Z0-9가-힣]+$/;
  return regex.test(value);
  //영어, 숫자, 한글만 사용했는지 검증
};

const validateWhiteSpace = (value: string) => {
  if (value.length === 0) {
    return false;
  }
  return true;
};

export const validationClubFee = (clubFee: string) => {
  return validateOnlyNum(clubFee);
};

const validateOnlyNum = (clubFee: string) => {
  const removedComma = clubFee
    .split(``)
    .filter((char) => char !== ",")
    .join(``);
  const regex = /^\d+$/;

  return regex.test(removedComma);
};
