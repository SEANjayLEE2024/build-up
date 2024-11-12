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
