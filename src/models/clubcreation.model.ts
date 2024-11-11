import { UseFormRegister } from "react-hook-form";

export type Inputs = {
  futsal_or_soccer: "futsal" | "soccer";
  club_img: File[];
  club_name: string;
  location: string;
  age: string;
  gender: "남" | "여";
  frequent_match_time: string;
  club_fee: string;
  preferred_position: string;
  team_tactics: string;
};

export type ClubFormProps = {
  register: UseFormRegister<Inputs>;
};
