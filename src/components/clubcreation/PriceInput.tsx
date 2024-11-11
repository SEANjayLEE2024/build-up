interface Props {
  clubFee: string;
  clubFeeError: string;
  onChangeClubFee: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PriceInput({
  clubFee,
  clubFeeError,
  onChangeClubFee,
}: Props) {
  return (
    <>
      <label className="mt-10">회비 설정</label>
      <div className="flex">
        <span>{`₩`}</span>
        <input
          maxLength={9}
          type="text"
          onChange={onChangeClubFee}
          value={clubFee}
        />
        {clubFeeError && <span>{clubFeeError}</span>}
      </div>
    </>
  );
}
