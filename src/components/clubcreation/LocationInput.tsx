import { useEffect, useState } from "react";
import { Regions } from "../../utils/constants/Region";
import { fetchRegionLocation } from "../../api/clubcreation.api";

interface RegionLocationProps {
  type: "Feature";
  properties: {
    full_nm: string;
    sig_cd: string;
    sig_eng_nm: string;
    sig_kor_nm: string;
  };
  id: string;
}

export default function LocationInput() {
  const [region, setRegion] = useState("");
  // 광역시도
  const [regionLocationsArray, setRegionLocationArray] = useState<
    RegionLocationProps[]
  >([]);
  // 시군구

  const onClickRegionButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentRegion = event.currentTarget.value;
    setRegion(currentRegion);
  };

  useEffect(() => {
    const getClickedRegionLocation = async () => {
      const clickedRegionLocation = await fetchRegionLocation(region);
      const clickedRegionLocationArray =
        clickedRegionLocation.result.featureCollection.features;
      setRegionLocationArray(clickedRegionLocationArray);
    };

    getClickedRegionLocation();
    // backend에서 요청할 수 있게 수정해야함
    // 여기서 cors 에러 발생
  }, [region]);

  console.log(regionLocationsArray);
  if (region && regionLocationsArray.length !== 0) {
    //여기서 set
  }

  return (
    <div>
      {!region &&
        Regions.map((region, i) => (
          <button
            key={i}
            onClick={onClickRegionButton}
            value={region.regionValue}
          >
            {region.regionName}
          </button>
        ))}
      {region && regionLocationsArray.length !== 0 && (
        <div className="flex flex-col ">
          {regionLocationsArray.map((location) => (
            <button>{location.properties.sig_kor_nm}</button>
          ))}
        </div>
      )}
    </div>
  );
}
// {!region && !regionLocationsArray && }
