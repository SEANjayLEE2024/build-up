import { MyClub } from "../../../models/myclub.model";

export const Body = ({ myClub }: { myClub: MyClub }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-evenly mt-12 text-m ">
        <div className="flex flex-col text-center">
          <span>{myClub.location}</span>
          <span>
            {myClub.gender} • {myClub.age}
          </span>
        </div>
        <div className="flex flex-col text-center">
          <span>{myClub.number_of_player} 명</span>
          <span>{myClub.formation}</span>
        </div>
      </div>
    </div>
  );
};
