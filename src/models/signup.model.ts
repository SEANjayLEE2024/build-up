export interface UserProfile {
  nickname: string;
  gender: number | null;
  nation: NationInfo;
  location: string;
  age: string;
}

export interface NationInfo {
  name: string;
  flag: string;
}

export interface NationAPI {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
}

export interface CheckboxType {
  id: string;
  text: string;
  checked: boolean;
}

export type StrongFoot = "왼발" | "양발" | "오른발" | null;

export interface PlayerProfile {
  footballPosition: string[];
  soccerPosition: string[];
  career: string | null;
  strongFoot: StrongFoot;
  favoriteClub: string | null;
}
