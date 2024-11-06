import type { Member } from "../../../models/myclub.model";
import MemberList from "./MemberList";
import MemberRecruitment from "./MemberRecruitment ";

export default function Member({ member }: { member: Member[] }) {
  console.log(member);
  return (
    <div className="p-10">
      <MemberRecruitment />
      <MemberList member={member} />
    </div>
  );
}
