import Navigation from "../components/Myclub/Navigation";
import { useMyClub } from "../hooks/useMyClub";
import Club from "../components/Myclub/club/Club.tsx";
import Formation from "../components/Myclub/formation/Formation.tsx";
import { useMember } from "../hooks/useMember.ts";
import Member from "../components/Myclub/member/Member.tsx";

const MyClubPage = () => {
  const myClub = useMyClub();
  const member = useMember();
  return (
    <div>
      <Navigation />
      {myClub && <Club myClub={myClub} />}
      <Formation />
      {member && <Member member={member} />}
    </div>
  );
};

export default MyClubPage;
