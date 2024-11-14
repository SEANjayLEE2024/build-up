import { UseFormRegister } from "react-hook-form";

export type ClubCreationInputHookI = {
  clubFutsalOrSoccer: "futsal" | "soccer";
  clubImg: File[];
  clubAge: string;
  clubGender: "남" | "여";
  clubFrequentMatchTime: string;
  clubPreferredPosition: string;
  clubTeamTactics: string;
};

export type ClubFormProps = {
  register: UseFormRegister<ClubCreationInputHookI>;
};

export interface ClubCreationInputStateI {
  imgPreview: string;
  clubName: string;
  clubNameError: string;
  clubFee: string;
  clubFeeError: string;
  // cycle,value 로 나누어야함
  clubLocation: string;
  clubRecruitment: {
    futsal: string[];
    soccer: string[];
  };
}

/**
 
  club_futsal_or_soccer: "futsal" | "soccer";
  club_img: File[];
  club_name: string;
  club_location: string;
  club_age: string;
  club_gender: "남" | "여";
  club_frequent_match_time: string;
  club_fee: {
    cycle: "매월" | "매주" | "매월" | "매번";
    value: string;
  };
  club_preferred_position: string;
  club_team_tactics: string;

데이터 POST시 보낼 내용.
 */

/*
export type ClubCreationInputs = {
  club_futsal_or_soccer: "futsal" | "soccer";
  club_img: File[];
  club_name: string;
  club_location: string;
  club_age: string;
  club_gender: "남" | "여";
  club_frequent_match_time: string;
  club_fee: string;
  club_preferred_position: string;
  club_team_tactics: string;
};
클럽 생성시 보내게 되는 데이터
*/
