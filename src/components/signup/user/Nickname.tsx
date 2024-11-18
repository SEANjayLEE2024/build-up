import { useState } from "react";
import { UserProfile } from "../../../models/signup.model";
import InputLayout from "../../common/InputLayout";

const NICKNAME_MAX_LENGTH = 20;
const NICKNAME_ALLOW_PATTERN = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/;

interface PropsType {
  userInfo: UserProfile;
  setUserInfo: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const Nickname: React.FC<PropsType> = ({ userInfo, setUserInfo }) => {
  const [nicknameErrorText, setNicknameErrorText] = useState<string | null>(
    null
  );

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

    setUserInfo((prev) => ({ ...prev, nickname: value }));

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
    <InputLayout title="닉네임">
      <div>
        <div
          className={`shadow-base-light border rounded-xl p-3 flex justify-between items-center gap-1 text-sm ${
            !nicknameErrorText
              ? "border-action-normal focus-within:border-base-inverted focus-within:shadow-focus-gray"
              : "border-focus-destructive-light focus-within:shadow-focus-red"
          }`}
        >
          <input
            className="flex-1 min-w-12 outline-none"
            type="text"
            maxLength={NICKNAME_MAX_LENGTH}
            placeholder="닉네임을 입력해주세요."
            onChange={onChangeNickname}
            onKeyDown={onKeyDownNickname}
            onBlur={onBlurNickname}
          />
          <p className="text-base-tertiary">
            <span>{userInfo.nickname.length}</span>/
            <span>{NICKNAME_MAX_LENGTH}</span>
          </p>
        </div>

        <p
          className={`flex text-[0.8125rem] gap-1 items-center mt-2 text-base-tertiary ${
            nicknameErrorText ? "text-red-600" : ""
          }`}
        >
          <i>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00004 14.6663C4.31804 14.6663 1.33337 11.6817 1.33337 7.99967C1.33337 4.31767 4.31804 1.33301 8.00004 1.33301C11.682 1.33301 14.6667 4.31767 14.6667 7.99967C14.6667 11.6817 11.682 14.6663 8.00004 14.6663ZM8.00004 13.333C9.41453 13.333 10.7711 12.7711 11.7713 11.7709C12.7715 10.7707 13.3334 9.41416 13.3334 7.99967C13.3334 6.58519 12.7715 5.22863 11.7713 4.22844C10.7711 3.22824 9.41453 2.66634 8.00004 2.66634C6.58555 2.66634 5.229 3.22824 4.2288 4.22844C3.22861 5.22863 2.66671 6.58519 2.66671 7.99967C2.66671 9.41416 3.22861 10.7707 4.2288 11.7709C5.229 12.7711 6.58555 13.333 8.00004 13.333ZM7.33337 4.66634H8.66671V5.99967H7.33337V4.66634ZM7.33337 7.33301H8.66671V11.333H7.33337V7.33301Z"
                fill={!nicknameErrorText ? "#0D1126" : "#E6483D"}
                fillOpacity={!nicknameErrorText ? "0.4" : "1"}
              />
            </svg>
          </i>
          {!nicknameErrorText
            ? "특수문자 제외 영어, 한글, 숫자만 사용가능합니다."
            : nicknameErrorText}
        </p>
      </div>
    </InputLayout>
  );
};

export default Nickname;
