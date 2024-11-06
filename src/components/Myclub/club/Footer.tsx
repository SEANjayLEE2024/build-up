import { MyClub } from "../../../models/myclub.model";
export const Footer = ({ myClub }: { myClub: MyClub }) => {
  return (
    <div className="mt-20 ">
      <span className="font-bold">클럽 소개</span>
      <p className="mt-10 leading-7">{myClub.club_info}</p>
      <div className="flex text-center justify-start mt-5">
        <span className="px-2 rounded-xl border-2 border-grey-500 text-xs text-neutral-400 mx-2">
          {myClub.skill === "상" && "#빡겜을 즐겨요"}
          {myClub.skill === "중" && "#함께 실력을 키워요"}
          {myClub.skill === "하" && "#즐겜을 즐겨요"}
        </span>
        <span className="px-2 rounded-xl border-2 border-grey-500 text-xs text-neutral-400 mx-2">
          {myClub.match_type === "자체전" && "#자체전 위주로 경기"}
          {myClub.match_type === "매칭전" && "#매칭전 위주로 경기"}
          {myClub.match_type === "무관" && "#자체/매칭 무관"}
        </span>
      </div>
    </div>
  );
};
