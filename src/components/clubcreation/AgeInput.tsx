import { ClubFormProps } from "../../models/clubcreation.model";

export default function AgeInput({ register }: ClubFormProps) {
  return (
    <>
      <label className="mt-10">연령대</label>
      <input {...register("age", { required: "필수 선택값입니다." })} />
    </>
  );
}
