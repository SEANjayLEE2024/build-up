import React, { useEffect, useState } from "react";
import { Regions } from "../../utils/constants/Region";
import { fetchRegionLocation } from "../../api/clubcreation.api";
import {
  ClubCreationInputStateI,
  RegionLocationProps,
} from "../../models/clubcreation.model";

interface Props {
  clubCreationInputs: ClubCreationInputStateI;
  setClubCreationInputs: React.Dispatch<
    React.SetStateAction<ClubCreationInputStateI>
  >;
}

export default function LocationInput({
  clubCreationInputs,
  setClubCreationInputs,
}: Props) {
  const [region, setRegion] = useState("");
  const [regionLocationsArray, setRegionLocationArray] = useState<
    RegionLocationProps[]
  >([]);
  const [location, setLocation] = useState("");
  // 광역시도 -> region
  // 시군도 -> regionLocationsArray

  const onClickRegionButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentRegion = event.currentTarget.value;
    console.log(currentRegion);
    setRegion(currentRegion);
  };

  const onClickLocationButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const currentLocation = event.currentTarget.value;
    setLocation(currentLocation);
  };

  useEffect(() => {
    const getClickedRegionLocation = async () => {
      const clickedRegionLocation = await fetchRegionLocation(region);
      const clickedRegionLocationArray =
        clickedRegionLocation.result.featureCollection.features;
      setRegionLocationArray(clickedRegionLocationArray);
    };
    // 클릭된 광역시도의 시군구 정보(배열)를 받아옴
    getClickedRegionLocation();
  }, [region]);

  useEffect(() => {
    if (region && location) {
      setClubCreationInputs((prev) => ({
        ...prev,
        clubLocation: `${location}`,
      }));
    }
  }, [location]);

  const resetLocation = () => {
    setClubCreationInputs((prev) => ({ ...prev, clubLocation: "" }));
    setLocation("");
    setRegion("");
    setRegionLocationArray([]);
  };

  return (
    <div>
      {!region &&
        Regions.map((region, i) => (
          <button
            key={i}
            onClick={onClickRegionButton}
            value={region.regionValue}
            type="button"
          >
            {region.regionName}
          </button>
        ))}
      {region && regionLocationsArray.length !== 0 && !location && (
        <div className="flex flex-col ">
          {regionLocationsArray.map((location) => (
            <button
              value={location.properties.full_nm}
              type="button"
              onClick={onClickLocationButton}
            >
              {location.properties.sig_kor_nm}
            </button>
          ))}
        </div>
      )}
      {region && location && (
        <div className="flex flex-col">
          <span>{clubCreationInputs.clubLocation}</span>
          <button onClick={resetLocation}>다시</button>
        </div>
      )}
    </div>
  );
}
