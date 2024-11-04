import { useState } from "react";
import Title from "../common/Title";
import informationImg from "../../assets/images/information-line.png";

const MAXLENGTH = 20;

const SetProfile = () => {
  const [nickname, setNickname] = useState<string>("");

  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };
  return (
    <>
      <form onSubmit={onsubmit}>
        <Title>빌드업 정보 입력하기</Title>

        <section>
          <p className="text-sm font-medium mb-2">
            닉네임 <span className="text-red-600">*</span>
          </p>
          <div className="shadow-light border border-gray rounded-xl p-3 flex justify-between items-center gap-1 text-sm">
            <input
              className="flex-1 min-w-12 outline-none"
              type="text"
              maxLength={MAXLENGTH}
              placeholder="닉네임을 입력해주세요."
              onChange={onChangeNickname}
            />
            <p className="text-gray">
              <span>{nickname.length}</span>/<span>{MAXLENGTH}</span>
            </p>
          </div>

          <p className="flex text-[0.8125rem] gap-1 items-center mt-2 text-gray">
            <i>
              <img src={informationImg} alt="" />
            </i>
            특수문자 제외 영어, 한글, 숫자만 사용가능합니다.
          </p>
        </section>
      </form>
    </>
  );
};

export default SetProfile;
