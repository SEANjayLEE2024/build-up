import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { httpClient } from "../../../api/http";
import closeImg from "../../../assets/images/close-icon.png";
import checkImg from "../../../assets/images/check.png";

interface PropsType {
  closeModal: () => void;
}
interface Nation {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
}

const SelectNationModal: React.FC<PropsType> = ({ closeModal }) => {
  const [nationList, setNationList] = useState<Nation[]>([]);
  const getNations = async () => {
    try {
      /* 무료 국가명, 국기img api */
      const response = await httpClient("https://restcountries.com/v3.1/all");
      const data: Nation[] = response.data;

      const sortedData = data
        .filter((nation) => nation.name.common !== "South Korea")
        .sort((a, b) => a.name.common.localeCompare(b.name.common));

      const southKorea = data.find(
        (nation) => nation.name.common === "South Korea"
      );
      if (southKorea) {
        sortedData.unshift(southKorea);
      }

      setNationList(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNations();
  }, []);

  return createPortal(
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-alpha-black-40">
      <div className="w-full h-[80vh] absolute bottom-0 bg-white rounded-tl-2xl rounded-tr-2xl px-2 py-6">
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
            {/* <img src="" alt="" /> */}
            <span>123</span>
            <span className="flex-1 font-semibold text-base-primary">
              대한민국
            </span>
            <button className="">
              <img src={checkImg} alt="check" />
            </button>
          </li>
        </header>

        <div className="border-b-[1px] border-base-divider my-3 mx-0.5"></div>

        <ul className="overflow-y-scroll h-full">
          {nationList.map((nation) => (
            <li
              key={nation.name.common}
              className="py-3.5 px-3 flex items-center gap-1.5 font-medium"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={nation.flags.svg}
                  alt={nation.name.common}
                />
              </div>
              <span>{nation.name.common}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default SelectNationModal;
