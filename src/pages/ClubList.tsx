import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ClubFilterPropsI } from "../models/clubfilter";
import { futsalPosition, soccerPosition } from "../utils/constants/position";
import { Regions } from "../utils/constants/Region";

type SortOrderT = string;

export default function ClubList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [futsalOrSoccer, setFutsalOrSoccer] = useState("풋살");
  const [filter, setFilter] = useState<ClubFilterPropsI>({
    location: "",
    region: "",
    age: "",
    position: "",
    page: 0,
  });

  const [sortOrder, setSortOrder] = useState<SortOrderT>("DESC"); //최신순이 default(차후에는 오래된 순서로)

  const handleOnClickFutsalOrSoccer = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const clicked = e.currentTarget.value;
    setFutsalOrSoccer(clicked);
  };

  const handleOnSelectRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.currentTarget.value;
    setFilter((current) => ({ ...current, region: selectedRegion }));
  };

  const handleOnSelectPosition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPosition = e.currentTarget.value;
    setFilter((current) => ({ ...current, position: selectedPosition }));
  };

  const handleOnSelectAge = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAge = e.currentTarget.value;
    setFilter((current) => ({ ...current, age: selectedAge }));
  };

  const handleOnSelectSortOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortOrder = e.currentTarget.value;
    setSortOrder(selectedSortOrder);
  };

  const handleOnSelectClubLocation = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedClubLocation = e.currentTarget.value;
    setFilter((current) => ({ ...current, location: selectedClubLocation }));
  };

  useEffect(() => {
    searchParams.set("location", filter.location);
    searchParams.set("region", filter.region);
    searchParams.set("position", filter.position);
    searchParams.set("age", filter.age);
    searchParams.set("page", String(filter.page));
    setSearchParams(searchParams);
  }, [filter]);

  useEffect(() => {
    searchParams.set("sort", sortOrder);
    setSearchParams(searchParams);
  }, [sortOrder]);

  // 무한 스크롤
  const options = {
    threshold: 1.0,
  };
  const callback = () => {
    setFilter((current) => ({ ...current, page: current.page + 1 }));
  };
  const observer = new IntersectionObserver(callback, options);
  const target = useRef(null);
  useEffect(() => {
    if (target.current) {
      observer.observe(target.current);
    }
  }, []);

  return (
    <div>
      <title>클럽 리스트</title>
      <h1>클럽 리스트</h1>

      <div className="flex justify-between">
        <select onChange={handleOnSelectClubLocation}>
          {Object.keys(Regions).map((location) => (
            <option value={location}>{location}</option>
          ))}
        </select>
        <select onChange={handleOnSelectRegion}>
          {filter.location &&
            Regions[filter.location as keyof typeof Regions].map((region) => (
              <option value={region}>{region}</option>
            ))}
        </select>
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

        <select onChange={handleOnSelectSortOrder}>
          <option value="DESC">최신순</option>
          <option value="ASC">오래된순</option>
        </select>
      </div>
      <div className="bg-lime-500 w-52 h-52"></div>
      <div className="bg-lime-500 w-52 h-52"></div>
      <div className="bg-lime-500 w-52 h-52"></div>
      <div className="bg-lime-500 w-52 h-52"></div>
      <div className="bg-lime-500 w-52 h-52"></div>
      <div className="bg-lime-500 w-52 h-52"></div>
      <div className="bg-lime-500 w-52 h-52"></div>
      <div className="bg-lime-500 w-52 h-52"></div>
      {Array.from({ length: filter.page }).map((i) => (
        <div id={String(i)} className="bg-lime-500 w-52 h-52"></div>
      ))}

      <div ref={target}></div>
    </div>
  );
}

//useLocation, useSearchParams는 react-router-dom에서 쿼리스트링을 가져올 수 있다.
//useLocation은 현재 location 객체를 반환한다.

// 필터링을 먼저
