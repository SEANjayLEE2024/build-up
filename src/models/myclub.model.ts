export interface MyClub {
  clubName: string;
  location: string;
  gender: "남" | "여";
  age: string;
  skill: "하" | "중" | "상";
  number_of_player: number;
  formation: string;
  club_info: string;
  match_type: "자체전" | "매칭전" | "무관";
}

export interface Member {
  id: number;
  name: string;
  position: string;
  profile: string;
  age: number;
  height: string;
  nationality: string;
  team: string;
}
