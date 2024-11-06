import { MyClub } from "../../../models/myclub.model";

export const Header = ({ myClub }: { myClub: MyClub }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="../../../../team_logo.png" className="w-36 h-36 rounded-lg" />
      <span className="text-lg font-bold mt-3">{myClub.clubName}</span>
    </div>
  );
};
