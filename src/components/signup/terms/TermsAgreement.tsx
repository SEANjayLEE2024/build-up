import { useState } from "react";
import { CheckboxType } from "../../../models/signup.model";
import Title from "../../common/Title";
import Checkbox from "./Checkbox";
import Button from "../../common/Button";
import FixedButtonLayout from "../../common/FixedButtonLayout";

interface PropsType {
  handleLoginStep: (step: number) => void;
}

const TermsAgreement: React.FC<PropsType> = ({ handleLoginStep }) => {
  const [checkboxes, setCheckboxes] = useState<CheckboxType[]>([
    {
      id: "all",
      text: "전체동의",
      checked: false,
    },
    {
      id: "service",
      text: "[필수] 서비스 이용약관",
      checked: false,
    },
    {
      id: "private",
      text: "[필수] 개인정보 수집 및 이용 동의",
      checked: false,
    },
    {
      id: "marketing",
      text: "[선택] 마케팅 정보 수신 동의",
      checked: false,
    },
  ]);

  const handleAllCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setCheckboxes((prev) => prev.map((checkbox) => ({ ...checkbox, checked })));
  };

  const handleCheckboxChange = (id: string) => {
    setCheckboxes((prev) => {
      const updatedCheckboxes = prev.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      );

      const allChecked = updatedCheckboxes
        .slice(1)
        .every((checkbox) => checkbox.checked);

      const anyUnchecked = updatedCheckboxes
        .slice(1)
        .some((checkbox) => !checkbox.checked);

      return updatedCheckboxes.map((checkbox, index) => {
        if (index === 0) {
          return { ...checkbox, checked: allChecked && !anyUnchecked };
        }
        return checkbox;
      });
    });
  };

  return (
    <>
      <div>
        <Title>서비스 이용약관에 동의해주세요</Title>

        <ul>
          <Checkbox
            id={checkboxes[0].id}
            checked={checkboxes[0].checked}
            onChange={handleAllCheckboxChange}
          >
            {checkboxes[0].text}
          </Checkbox>
          {checkboxes.slice(1).map((list) => (
            <Checkbox
              key={list.id}
              id={list.id}
              checked={list.checked}
              onChange={() => handleCheckboxChange(list.id)}
            >
              {list.text}
            </Checkbox>
          ))}
        </ul>
      </div>

      <FixedButtonLayout>
        <Button
          className="text-white"
          buttonEvent={() => handleLoginStep(1)}
          disable={!checkboxes[1].checked || !checkboxes[2].checked}
        >
          다음
        </Button>
      </FixedButtonLayout>
    </>
  );
};

export default TermsAgreement;
