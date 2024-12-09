export interface RegionsT {
  서울: string[];
  경기: string[];
  인천: string[];
  부산: string[];
  대전: string[];
  대구: string[];
  울산: string[];
  세종: string[];
  광주: string[];
  강원: string[];
  충북: string[];
  충남: string[];
  경북: string[];
  경남: string[];
  전북: string[];
  전남: string[];
  제주: string[];
}

export interface ClubFilterPropsI {
  location: string;
  region: string;
  age: string;
  position: string;
  page: number;
}
