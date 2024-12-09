import { UseFormRegister } from "react-hook-form";

export interface ClubCreationInputHookI {
  clubFutsalOrSoccer: "futsal" | "soccer";
  clubImg: File[];
  clubAge: string;
  clubGender: "남" | "여";
  clubFrequentMatchTime: string;
  clubPreferredPosition: string;
  clubTeamTactics: string;
}

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

export interface RegionLocationProps {
  type: "Feature";
  properties: {
    full_nm: string;
    sig_cd: string;
    sig_eng_nm: string;
    sig_kor_nm: string;
  };
  id: string;
}
