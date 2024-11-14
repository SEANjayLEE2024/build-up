import { useState } from "react";
import { ClubFormProps } from "../../models/clubcreation.model";

export default function TeamTaticsInput({ register }: ClubFormProps) {
  // 여기서 [ 축구 | 풋살 ] 분기 후 고를 수 있게 하기
  const [teamMode, setTeamMode] = useState<string>("풋살");

  const changeTeamMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedMode = e.currentTarget.value;
    setTeamMode(clickedMode);
  };

  return (
    <>
      <div className="flex ">
        <button type="button" value="풋살" onClick={changeTeamMode}>
          풋살
        </button>
        <button type="button" value="축구" onClick={changeTeamMode}>
          축구
        </button>
      </div>
      <span>{teamMode}모드</span>
      <label className="mt-10">팀 전술</label>
      {teamMode === "풋살" && (
        <select
          {...register("clubTeamTactics", { required: "필수 선택값입니다." })}
        >
          <option value="1-2-1">1-2-1</option>
          <option value="2-0-2">2-0-2</option>
          <option value="2-1-1">2-1-1</option>
          <option value="1-2-2">1-2-2</option>
        </select>
      )}
      {teamMode === "축구" && (
        <select
          {...register("clubTeamTactics", { required: "필수 선택값입니다." })}
        >
          <option value="4-2-2">4-4-2</option>
          <option value="4-3-3">4-3-3</option>
          <option value="4-2-3-1">4-2-3-1</option>
          <option value="3-4-3">3-4-3</option>
        </select>
      )}
    </>
  );
}
