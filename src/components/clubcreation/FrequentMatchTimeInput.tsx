import { ClubFormProps } from "../../models/clubcreation.model";

export default function FrequentMatchTimeInput({ register }: ClubFormProps) {
  return (
    <>
      <label className="mt-10">시간대</label>
      <input
        {...register("frequent_match_time", {
          required: "필수 선택값입니다.",
        })}
      />
    </>
  );
}
