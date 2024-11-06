import { MyClub } from "../../../models/myclub.model";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Club = ({ myClub }: { myClub: MyClub }) => {
  // 타입 지정 위 처럼 해야하는 이유는?
  return (
    <div className="p-10">
      <Header myClub={myClub} />
      <Body myClub={myClub} />
      <Footer myClub={myClub} />
    </div>
  );
};

export default Club;
