import { ClubFormProps } from "../../models/clubcreation.model";

export default function TeamTaticsInput({ register }: ClubFormProps) {
  return (
    <>
      <label className="mt-10">팀 전술</label>
      <input
        {...register("team_tactics", { required: "필수 선택값입니다." })}
      />
    </>
  );
}
