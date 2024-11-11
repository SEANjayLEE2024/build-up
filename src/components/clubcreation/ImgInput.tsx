import { ClubFormProps } from "../../models/clubcreation.model";

interface Props extends ClubFormProps {
  imgPreview: string;
}

export default function ImgInput({ register, imgPreview }: Props) {
  return (
    <>
      <label className="mt-10">대표 이미지</label>
      {imgPreview && (
        <img src={imgPreview} className="h-14 w-14 rounded-full bg-slate-500" />
      )}
      <input
        className="p-2"
        type="file"
        accept="image/*"
        {...register("club_img", { required: "필수 선택값입니다." })}
      />
    </>
  );
}
