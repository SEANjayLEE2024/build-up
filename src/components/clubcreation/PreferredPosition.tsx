import React, { useState } from "react";
import { ClubCreationInputStateI } from "../../models/clubcreation.model";

const futSalPosition = ["PIVO", "ALA", "FIXO", "GOLEIRO", "없음"];
const soccerPosition = [
  "ST",
  "LW",
  "RW",
  "AM",
  "MC",
  "DM",
  "LB",
  "RB",
  "CB",
  "GK",
  "없음",
];

interface Props {
  clubCreationInputs: ClubCreationInputStateI;
  setClubCreationInputs: React.Dispatch<
    React.SetStateAction<ClubCreationInputStateI>
  >;
}

export default function PreferredPosition({
  clubCreationInputs,
  setClubCreationInputs,
}: Props) {
  const AddPreferredFutsalPosition = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const preferredPosition = e.currentTarget.value;
    setClubCreationInputs((current) => ({
      ...current,
      clubRecruitment: {
        ...current.clubRecruitment,
        futsal: [
          ...new Set([...current.clubRecruitment.futsal, preferredPosition]),
        ],
      },
    }));
  };

  const AddPreferredSoccerPosition = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const preferredPosition = e.currentTarget.value;
    setClubCreationInputs((current) => ({
      ...current,
      clubRecruitment: {
        ...current.clubRecruitment,
        soccer: [
          ...new Set([...current.clubRecruitment.soccer, preferredPosition]),
        ],
      },
    }));
  };

  const DeletePreferredFutSalPosition = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const notPreferredPosition = e.currentTarget.value;
    const notPreferredPositionIndex =
      clubCreationInputs.clubRecruitment.futsal.indexOf(notPreferredPosition);
    const newFutsalPosition = [...clubCreationInputs.clubRecruitment.futsal];
    newFutsalPosition.splice(notPreferredPositionIndex, 1);
    setClubCreationInputs((current) => ({
      ...current,
      clubRecruitment: {
        ...current.clubRecruitment,
        futsal: newFutsalPosition,
      },
    }));
  };

  const DeletePreferredSoccerPosition = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const notPreferredPosition = e.currentTarget.value;
    const notPreferredPositionIndex =
      clubCreationInputs.clubRecruitment.soccer.indexOf(notPreferredPosition);
    const newSoccerPosition = [...clubCreationInputs.clubRecruitment.soccer];
    newSoccerPosition.splice(notPreferredPositionIndex, 1);
    setClubCreationInputs((current) => ({
      ...current,
      clubRecruitment: {
        ...current.clubRecruitment,
        soccer: newSoccerPosition,
      },
    }));
  };

  const checkFutsalPreferred = (position: string) => {
    if (clubCreationInputs.clubRecruitment.futsal.includes(position)) {
      return true;
    }
    return false;
  };

  const checkSoccerPreferred = (position: string) => {
    if (clubCreationInputs.clubRecruitment.soccer.includes(position)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <label className="mt-10">영입 희망 포지션</label>
      <div className="flex w-30 items-center">
        <span>풋살 영입</span>
        {futSalPosition.map((position, i) =>
          checkFutsalPreferred(position) ? (
            <button
              value={position}
              type="button"
              className="p-2 cursor-pointer border-2 rounded border-slate-100 bg-lime-200"
              key={i}
              onClick={DeletePreferredFutSalPosition}
            >
              {position}
            </button>
          ) : (
            <button
              value={position}
              type="button"
              className="p-2 cursor-pointer border-2 rounded border-lime-200"
              key={i}
              onClick={AddPreferredFutsalPosition}
            >
              {position}
            </button>
          )
        )}
      </div>
      <div className="flex w-30 items-center">
        <span>축구 영입</span>
        {soccerPosition.map((position, i) =>
          checkSoccerPreferred(position) ? (
            <button
              value={position}
              type="button"
              className="p-2 cursor-pointer border-2 rounded border-slate-100 bg-lime-200"
              key={i}
              onClick={DeletePreferredSoccerPosition}
            >
              {position}
            </button>
          ) : (
            <button
              value={position}
              type="button"
              className="p-2 cursor-pointer border-2 rounded border-lime-200"
              key={i}
              onClick={AddPreferredSoccerPosition}
            >
              {position}
            </button>
          )
        )}
      </div>
    </>
  );
}
