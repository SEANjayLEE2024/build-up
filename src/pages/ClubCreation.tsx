import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  validationClubFee,
  validationClubName,
} from "../utils/validation/CreateClub";
import { ClubFeeFomatter } from "../utils/formatter/ClubCreation";
import NameInput from "../components/clubcreation/NameInput";
import PriceInput from "../components/clubcreation/PriceInput";
import { Inputs } from "../models/clubcreation.model";
import FusalOrSoccer from "../components/clubcreation/FutsalOrSoccer";
import ImgInput from "../components/clubcreation/ImgInput";
import LocationInput from "../components/clubcreation/LocationInput";
import AgeInput from "../components/clubcreation/AgeInput";
import GenderInput from "../components/clubcreation/GenderInput";
import FrequentMatchTimeInput from "../components/clubcreation/FrequentMatchTimeInput";
import TeamTaticsInput from "../components/clubcreation/TeamTactics";
import PreferredPosition from "../components/clubcreation/PreferredPosition";

export default function ClubCreation() {
  const [imgPreview, setImgPreview] = useState("");
  const [clubName, setClubName] = useState("");
  const [clubNameError, setClubNameError] = useState("");
  const [clubFee, setClubFee] = useState("0");
  const [clubFeeError, setClubFeeError] = useState("");
  const [clubLocation, setClubLocation] = useState("");

  const onChangeClubName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clubNameCurrent = event.target.value;
    if (validationClubName(clubNameCurrent)) {
      setClubName(clubNameCurrent);
      setClubNameError("");
    } else if (!validationClubName(clubNameCurrent)) {
      setClubName("");
      setClubNameError("10글자 이내의 한글, 영어, 숫자만 사용가능합니다.");
    }
  };

  const onChangeClubFee = (event: React.ChangeEvent<HTMLInputElement>) => {
    let clubFeeCurrent = event.target.value;

    if (validationClubFee(clubFeeCurrent)) {
      clubFeeCurrent = ClubFeeFomatter(clubFeeCurrent);
      setClubFeeError(``);
      setClubFee(clubFeeCurrent);
    } else if (!validationClubFee(clubFeeCurrent)) {
      setClubNameError("숫자만 사용가능합니다.");
      if (clubFeeCurrent === "") {
        setClubFee("0");
        setClubFeeError(``);
        // input을 모두 지운 경우는 ClubFee 0으로 초기화
        // input을 모두 지운 경우는 오류 사항이 아님
      }
    }
  };

  const onChangeClubLocation = (regionLocation: string) => {
    setClubLocation(regionLocation);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log("제출됨");
  };

  const imgFiles = watch("club_img");
  useEffect(() => {
    if (imgFiles && imgFiles.length > 0) {
      const file = imgFiles[0];
      setImgPreview(URL.createObjectURL(file));
      // 한번 파일을 선택하면 브라우저의 메모리에 저장이 된다.
      //라우저의 메모리에 있는 파일의 url을 가져오기 위한 방법이 URL.createObjectURL(file)
    }
  }, [imgFiles]);
  // 차후에 formData로 backend로 보내주는 로직을 분리해야함

  // 중복닉네임 조회 기능 추가 해야함

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <FusalOrSoccer register={register} />
        <ImgInput register={register} imgPreview={imgPreview} />
        <NameInput
          clubNameError={clubNameError}
          onChangeClubName={onChangeClubName}
        />
        <LocationInput />
        <AgeInput register={register} />
        <GenderInput register={register} />
        <FrequentMatchTimeInput register={register} />
        <PriceInput
          clubFee={clubFee}
          clubFeeError={clubFeeError}
          onChangeClubFee={onChangeClubFee}
        />
        <TeamTaticsInput register={register} />
        <PreferredPosition register={register} />
        <button type="submit">생성 완료</button>
      </form>
    </div>
  );
}
