import { ClubFormProps } from "../../models/clubcreation.model";

export default function AgeInput({ register }: ClubFormProps) {
  return (
    <>
      <label className="mt-10">연령대</label>
      <select {...register("clubAge", { required: "필수 선택값입니다." })}>
        <option value="10대">10대</option>
        <option value="20대">20대</option>
        <option value="30대">30대</option>
        <option value="40대">40대</option>
        <option value="50대">50대</option>
        <option value="60대">60대</option>
        <option value="70대 이상">70대 이상</option>
      </select>
    </>
  );
}
