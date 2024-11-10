import { useState } from "react";
import { UserProfile } from "../../models/signup.model";
import Title from "../common/Title";
import informationImg from "../../assets/images/information-line.png";

const NICKNAME_MAX_LENGTH = 20;
const NICKNAME_ALLOW_PATTERN = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/;

const SetProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    nickname: "",
    gender: null,
    nation: "",
    location: "",
    age: "",
  });
  const [nicknameErrorText, setNicknameErrorText] = useState<string | null>(
    null
  );

  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onKeyDownNickname = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !NICKNAME_ALLOW_PATTERN.test(event.key) &&
      event.key !== "Backspace" &&
      event.key !== "Enter"
    ) {
      event.preventDefault();
    }
  };

  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setProfile((prev) => ({ ...prev, nickname: value }));

    if (value === "") {
      setNicknameErrorText(null);
      return;
    }

    if (
      value.length < 4 ||
      value.length > 20 ||
      !NICKNAME_ALLOW_PATTERN.test(value)
    ) {
      setNicknameErrorText(
        "4 ~ 20자 이내의 한글, 영어, 숫자만 사용가능합니다."
      );
    } else {
      setNicknameErrorText(null);
    }
  };

  const onBlurNickname = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const koreanPattern = /[ㄱ-ㅎㅏ-ㅣ]/;

    if (koreanPattern.test(value)) {
      setNicknameErrorText("자음과 모음을 따로 사용할 수 없습니다.");
      return;
    }
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
              maxLength={NICKNAME_MAX_LENGTH}
              placeholder="닉네임을 입력해주세요."
              onChange={onChangeNickname}
              onKeyDown={onKeyDownNickname}
              onBlur={onBlurNickname}
            />
            <p className="text-gray">
              <span>{profile.nickname.length}</span>/
              <span>{NICKNAME_MAX_LENGTH}</span>
            </p>
          </div>

          <p
            className={`flex text-[0.8125rem] gap-1 items-center mt-2 text-gray ${
              nicknameErrorText ? "text-red-600" : ""
            }`}
          >
            <i>
              <img src={informationImg} alt="" />
            </i>
            {!nicknameErrorText
              ? "특수문자 제외 영어, 한글, 숫자만 사용가능합니다."
              : nicknameErrorText}
          </p>
        </section>
      </form>
    </>
  );
};

export default SetProfile;
