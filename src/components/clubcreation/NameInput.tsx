interface Props {
  clubNameError: string;
  onChangeClubName: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NameInput({ clubNameError, onChangeClubName }: Props) {
  return (
    <>
      <label className="mt-10"></label>
      <input
        maxLength={10}
        className="p-2"
        onChange={onChangeClubName}
        placeholder="클럽 이름을 입력해주세요."
      />
      {clubNameError && <span>{clubNameError}</span>}
      <span className="text-xs">
        특수문자 제외 영어, 한글, 숫자만 사용가능합니다.
      </span>
    </>
  );
}
