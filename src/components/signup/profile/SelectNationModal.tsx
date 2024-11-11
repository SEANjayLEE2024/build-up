import { createPortal } from "react-dom";
import { NationInfo, UserProfile } from "../../../models/signup.model";
import closeImg from "../../../assets/images/close-icon.png";
import checkImg from "../../../assets/images/check.png";
import FixedButtonLayout from "../../common/FixedButtonLayout";
import Button from "../../common/Button";

interface PropsType {
  closeModal: () => void;
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  nationList: NationInfo[];
}

const SelectNationModal: React.FC<PropsType> = ({
  closeModal,
  setProfile,
  nationList,
  profile,
}) => {
  const stopEventPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const selectNation = (nation: NationInfo) => {
    setProfile((prev) => ({
      ...prev,
      nation,
    }));
  };

  return createPortal(
    <div
      className="fixed top-0 right-0 left-0 bottom-0 bg-alpha-black-40"
      onClick={closeModal}
    >
      <div
        className="w-full h-[80vh] absolute z-10 bottom-0 bg-white rounded-tl-2xl rounded-tr-2xl px-2 py-6"
        onClick={stopEventPropagation}
      >
        <header>
          <div className="p-1 flex justify-between items-center gap-2 mb-2.5">
            <p className="font-semibold text-xl text-base-primary flex-1 mx-1.5">
              국가선택
            </p>
            <button className="p-1.5" onClick={closeModal}>
              <img src={closeImg} alt="close" />
            </button>
          </div>

          <li className="list-none my-0.5 flex justify-between items-center gap-1.5 bg-overlay-active-normal rounded-md py-3.5 px-3">
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={profile.nation.flag}
                alt=""
              />
            </div>
            <span className="flex-1 font-semibold text-base-primary">
              {profile.nation.name}
            </span>
            <button className="">
              <img src={checkImg} alt="check" />
            </button>
          </li>
        </header>

        <div className="border-b-[1px] border-base-divider my-3 mx-0.5"></div>

        <ul className="overflow-y-scroll h-[calc(100%-180px)]">
          {nationList.map((nation) => (
            <li
              key={nation.name}
              className="py-3.5 px-3 flex items-center gap-1.5 font-medium"
              onClick={() => selectNation(nation)}
            >
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={nation.flag}
                  alt={nation.name}
                />
              </div>
              <span>{nation.name}</span>
            </li>
          ))}
        </ul>

        <FixedButtonLayout className={"absolute"}>
          <Button buttonEvent={closeModal}>적용하기</Button>
        </FixedButtonLayout>
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default SelectNationModal;
