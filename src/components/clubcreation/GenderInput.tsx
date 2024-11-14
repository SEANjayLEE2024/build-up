import { ClubFormProps } from "../../models/clubcreation.model";

export default function GenderInput({ register }: ClubFormProps) {
  return (
    <>
      <label className="mt-10">성별</label>
      <select {...register("clubGender", { required: "필수 선택값입니다." })}>
        <option value="남">남</option>
        <option value="여">여</option>
      </select>
    </>
  );
}
