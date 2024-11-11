import { ClubFormProps } from "../../models/clubcreation.model";

export default function GenderInput({ register }: ClubFormProps) {
  return (
    <>
      <label className="mt-10">성별</label>
      <input {...register("gender", { required: "필수 선택값입니다." })} />
    </>
  );
}
