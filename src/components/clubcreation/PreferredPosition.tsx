import { ClubFormProps } from "../../models/clubcreation.model";

export default function PreferredPosition({ register }: ClubFormProps) {
  return (
    <>
      <label className="mt-10">영입 희망 포지션</label>
      <input
        {...register("preferred_position", {
          required: "필수 선택값입니다.",
        })}
      />
    </>
  );
}
