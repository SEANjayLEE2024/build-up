import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import NameInput from "../components/clubcreation/NameInput";
import PriceInput from "../components/clubcreation/PriceInput";
import { ClubCreationInputStateI, Inputs } from "../models/clubcreation.model";
import FusalOrSoccer from "../components/clubcreation/FutsalOrSoccer";
import ImgInput from "../components/clubcreation/ImgInput";
import LocationInput from "../components/clubcreation/LocationInput";
import AgeInput from "../components/clubcreation/AgeInput";
import GenderInput from "../components/clubcreation/GenderInput";
import FrequentMatchTimeInput from "../components/clubcreation/FrequentMatchTimeInput";
import TeamTaticsInput from "../components/clubcreation/TeamTactics";
import PreferredPosition from "../components/clubcreation/PreferredPosition";

export default function ClubCreation() {
  const [clubCreationInputs, setClubCreationInputs] =
    useState<ClubCreationInputStateI>({
      imgPreview: "",
      clubName: "",
      clubNameError: "",
      clubFee: "0",
      clubFeeError: "",
      clubLocation: "",
    });

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
      setClubCreationInputs((prev) => ({
        ...prev,
        imgPreview: URL.createObjectURL(file),
      }));
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
        <ImgInput
          register={register}
          imgPreview={clubCreationInputs.imgPreview}
        />
        <NameInput
          clubCreationInputs={clubCreationInputs}
          setClubCreationInputs={setClubCreationInputs}
        />
        <LocationInput
          clubCreationInputs={clubCreationInputs}
          setClubCreationInputs={setClubCreationInputs}
        />
        <AgeInput register={register} />
        <GenderInput register={register} />
        <FrequentMatchTimeInput register={register} />
        <PriceInput
          clubCreationInputs={clubCreationInputs}
          setClubCreationInputs={setClubCreationInputs}
        />
        <TeamTaticsInput register={register} />
        <PreferredPosition register={register} />
        <button type="submit">생성 완료</button>
      </form>
    </div>
  );
}
