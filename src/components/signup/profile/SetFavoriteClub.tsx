import InputLayout from "../../common/InputLayout";

const SetFavoriteClub = () => {
  const changeFavoriteClub = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <InputLayout title="좋아하는 프로 클럽" required={false}>
      <div
        className={`shadow-base-light border rounded-xl p-3 flex justify-between items-center gap-1 text-sm`}
      >
        <input
          className="flex-1 min-w-12 outline-none"
          type="text"
          placeholder="ex) 멘체스터시티 or 토트넘"
          onChange={changeFavoriteClub}
        />
      </div>
    </InputLayout>
  );
};

export default SetFavoriteClub;
