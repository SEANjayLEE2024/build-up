import { ClubFormProps } from "../../models/clubcreation.model";

export default function FusalOrSoccer({ register }: ClubFormProps) {
  return (
    <>
      <label className="mt-10">풋살 | 축구</label>
      <select
        className="p-2"
        defaultValue={"풋살"}
        {...register("clubFutsalOrSoccer", {
          required: "필수 선택값입니다.",
        })}
      >
        <option value="풋살">풋살</option>
        <option value="축구">축구</option>
      </select>
    </>
  );
}
