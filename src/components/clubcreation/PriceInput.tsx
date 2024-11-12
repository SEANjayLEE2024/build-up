import { ClubCreationInputStateI } from "../../models/clubcreation.model";
import { ClubFeeFomatter } from "../../utils/formatter/ClubCreation";
import { validationClubFee } from "../../utils/validation/CreateClub";

interface Props {
  clubCreationInputs: ClubCreationInputStateI;
  setClubCreationInputs: React.Dispatch<
    React.SetStateAction<ClubCreationInputStateI>
  >;
}

export default function PriceInput({
  clubCreationInputs,
  setClubCreationInputs,
}: Props) {
  const onChangeClubFee = (event: React.ChangeEvent<HTMLInputElement>) => {
    let clubFeeCurrent = event.target.value;

    if (validationClubFee(clubFeeCurrent)) {
      clubFeeCurrent = ClubFeeFomatter(clubFeeCurrent);
      setClubCreationInputs((prev) => ({ ...prev, clubFeeError: "" }));
      setClubCreationInputs((prev) => ({ ...prev, clubFee: clubFeeCurrent }));
    } else if (!validationClubFee(clubFeeCurrent)) {
      setClubCreationInputs((prev) => ({
        ...prev,
        clubFeeError: "숫자만 사용가능합니다.",
      }));
      if (clubFeeCurrent === "") {
        setClubCreationInputs((prev) => ({ ...prev, clubFee: "0" }));
        setClubCreationInputs((prev) => ({ ...prev, clubFeeError: `` }));
        // input을 모두 지운 경우는 ClubFee 0으로 초기화
        // input을 모두 지운 경우는 오류 사항이 아님
      }
    }
  };

  return (
    <>
      <label className="mt-10">회비 설정</label>
      <div className="flex">
        <span>{`₩`}</span>
        <input
          maxLength={9}
          type="text"
          onChange={onChangeClubFee}
          value={clubCreationInputs.clubFee}
        />
        {clubCreationInputs.clubFeeError && (
          <span>{clubCreationInputs.clubFeeError}</span>
        )}
      </div>
    </>
  );
}
