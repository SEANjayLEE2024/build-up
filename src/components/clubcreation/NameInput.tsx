import React from "react";
import { ClubCreationInputStateI } from "../../models/clubcreation.model";
import {
  validateAlphaNumericKorea,
  validationClubName,
} from "../../utils/validation/CreateClub";

interface Props {
  clubCreationInputs: ClubCreationInputStateI;
  setClubCreationInputs: React.Dispatch<
    React.SetStateAction<ClubCreationInputStateI>
  >;
}

export default function NameInput({
  clubCreationInputs,
  setClubCreationInputs,
}: Props) {
  const onChangeClubName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clubNameCurrent = event.target.value;

    if (validationClubName(clubNameCurrent)) {
      setClubCreationInputs((prev) => ({ ...prev, clubName: clubNameCurrent }));
      setClubCreationInputs((prev) => ({ ...prev, clubNameError: "" }));
    } else if (!validationClubName(clubNameCurrent)) {
      setClubCreationInputs((prev) => ({ ...prev, clubName: "" }));
      setClubCreationInputs((prev) => ({
        ...prev,
        clubNameError: "10글자 이내의 한글, 영어, 숫자만 사용가능합니다.",
      }));
    }
  };

  const onBlurInput = (event: React.FocusEvent<HTMLInputElement>) => {
    const clubNameCurrent = event.target.value;

    if (validateAlphaNumericKorea(clubNameCurrent)) {
      setClubCreationInputs((prev) => ({ ...prev, clubName: clubNameCurrent }));
      setClubCreationInputs((prev) => ({ ...prev, clubNameError: "" }));
    } else if (!validateAlphaNumericKorea(clubNameCurrent)) {
      setClubCreationInputs((prev) => ({ ...prev, clubName: "" }));
      setClubCreationInputs((prev) => ({
        ...prev,
        clubNameError: "자음, 모음 사용은 불가능합니다.",
      }));
    }
  };

  return (
    <>
      <label className="mt-10"></label>
      <input
        maxLength={10}
        className="p-2"
        onChange={onChangeClubName}
        placeholder="클럽 이름을 입력해주세요."
        onBlur={onBlurInput}
      />
      {clubCreationInputs.clubNameError && (
        <span>{clubCreationInputs.clubNameError}</span>
      )}
      <span className="text-xs">
        특수문자 제외 영어, 한글, 숫자만 사용가능합니다.
      </span>
    </>
  );
}
