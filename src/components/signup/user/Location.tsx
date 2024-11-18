import locationImage from "../../../assets/images/locate.png";
import checkImage from "../../../assets/images/check.png";
import mapImage from "../../../assets/images/map.png";
import Map from "./Map";
import { UserProfile } from "../../../models/signup.model";
import { useState } from "react";
import InputLayout from "../../common/InputLayout";

interface PropsType {
  userInfo: UserProfile;
  setUserInfo: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const Location: React.FC<PropsType> = ({ userInfo, setUserInfo }) => {
  const [openMap, setOpenMap] = useState<boolean>(false);

  const mapHandler = async () => {
    setOpenMap(true);
  };

  return (
    <>
      <InputLayout title="동네">
        {userInfo.location && (
          <div className="flex justify-between items-center mx-1 mb-2">
            <div className="flex justify-between items-center py-0.5">
              <p className="mr-1.5">
                <img src={locationImage} alt="location-img" />
              </p>
              <span className="text-sm font-medium">{userInfo.location}</span>
            </div>
            <div>
              <img src={checkImage} alt="check-img" />
            </div>
          </div>
        )}

        <div
          className="shadow-base-light border p-3 border-action-normal rounded-xl flex justify-center items-center text-sm overflow-hidden relative"
          onClick={mapHandler}
        >
          <p className="mr-1">
            <img src={mapImage} alt="map-img" />
          </p>
          <span className="px-1 text-sm font-medium">내 동네 설정하기</span>
        </div>
      </InputLayout>
      {openMap && <Map />}
    </>
  );
};

export default Location;
