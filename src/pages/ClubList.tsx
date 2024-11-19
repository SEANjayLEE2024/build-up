import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ClubFilterPropsI } from "../models/clubfilter";
import { Regions } from "../utils/constants/Region";
import { futsalPosition, soccerPosition } from "../utils/constants/position";
import { fetchRegionLocation } from "../api/clubcreation.api";
import { RegionLocationProps } from "../models/clubcreation.model";

export default function ClubList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [futsalOrSoccer, setFutsalOrSoccer] = useState("풋살");
  const [filter, setFilter] = useState<ClubFilterPropsI>({
    location: "",
    age: "",
    position: "",
  });
  const [regionLocationsArray, setRegionLocationArray] = useState<
    RegionLocationProps[]
  >([]);

  const handleOnClickFutsalOrSoccer = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const clicked = e.currentTarget.value;
    setFutsalOrSoccer(clicked);
  };

  const handleOnSelectLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocation = e.currentTarget.value;
    setFilter((current) => ({ ...current, location: selectedLocation }));
  };

  const handleOnSelectRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.currentTarget.value;
    setFilter((current) => ({ ...current, location: selectedRegion }));
  };

  const handleOnSelectPosition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPosition = e.currentTarget.value;
    setFilter((current) => ({ ...current, position: selectedPosition }));
  };

  const handleOnSelectAge = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAge = e.currentTarget.value;
    setFilter((current) => ({ ...current, age: selectedAge }));
  };

  useEffect(() => {
    const getRegionLocation = async () => {
      if (filter.location) {
        const getRegionLocation = await fetchRegionLocation(filter.location);
        const getRegionLocationArray =
          getRegionLocation.result.featureCollection.features;
        setRegionLocationArray(getRegionLocationArray);
      }
    };
    getRegionLocation();
  }, [filter.location]);

  useEffect(() => {
    searchParams.set("location", filter.location);
    searchParams.set("position", filter.position);
    searchParams.set("age", filter.age);

    setSearchParams(searchParams);
  }, [filter]);

  return (
    <div>
      <title>클럽 리스트</title>
      <h1>클럽 리스트</h1>

      <div className="flex justify-between">
        <select onChange={handleOnSelectLocation}>
          {Regions.map((region) => (
            <option value={region.regionValue}>{region.regionName}</option>
          ))}
        </select>
        {regionLocationsArray.length !== 0 && (
          <select onChange={handleOnSelectRegion}>
            {regionLocationsArray.map((region) => (
              <option value={region.properties.sig_kor_nm.split(` `)[1]}>
                {region.properties.sig_kor_nm}
              </option>
            ))}
          </select>
        )}
        <button
          onClick={handleOnClickFutsalOrSoccer}
          type="button"
          value={futsalOrSoccer === "축구" ? "풋살" : "축구"}
        >
          {futsalOrSoccer === "축구" ? "풋살" : "축구"}
        </button>
        <select onChange={handleOnSelectPosition}>
          {futsalOrSoccer === "풋살" &&
            futsalPosition.map((position) => (
              <option value={position.split(`(`)[0]}>{position}</option>
            ))}
          {futsalOrSoccer === "축구" &&
            soccerPosition.map((position) => (
              <option value={position.split(`(`)[0]}>{position}</option>
            ))}
        </select>

        <select onChange={handleOnSelectAge}>
          <option value="20대">20대</option>
          <option value="30대">30대</option>
          <option value="40대">40대</option>
          <option value="50대">50대</option>
          <option value="60대">60대</option>
          <option value="70대이상">70대이상</option>
        </select>
      </div>
    </div>
  );
}

//useLocation, useSearchParams는 react-router-dom에서 쿼리스트링을 가져올 수 있다.
//useLocation은 현재 location 객체를 반환한다.

// 필터링을 먼저
