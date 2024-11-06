import { Member } from "../../../models/myclub.model";

export default function MemberList({ member }: { member: Member[] }) {
  return (
    <div className="mt-10">
      <span>클럽 멤버 ({member.length})</span>
      <div>
        {member.map((player) => (
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-sm ">{player.name}</span>
              <span className="text-xs text-gray-300">{player.profile}</span>
            </div>
            <div>
              <span className="text-sm text-green-700">{player.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
