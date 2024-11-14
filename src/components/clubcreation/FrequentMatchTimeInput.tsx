import { ClubFormProps } from "../../models/clubcreation.model";

export default function FrequentMatchTimeInput({ register }: ClubFormProps) {
  return (
    <>
      <label className="mt-10">시간대</label>
      <select
        {...register("clubFrequentMatchTime", {
          required: "필수 선택값입니다.",
        })}
      >
        <option>평일 주간</option>
        <option>평일 야간</option>
        <option>주말 주간</option>
        <option>주말 야간</option>
      </select>
    </>
  );
}
