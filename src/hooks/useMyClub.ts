import { useEffect, useState } from "react";
import { MyClub } from "../models/myclub.model";
import { fetchMyclub } from "../api/myclub.api";

export const useMyClub = () => {
  const [myClub, setMyclub] = useState<MyClub>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMyclub();
      setMyclub(data);
    };

    fetchData();
  }, []);

  return myClub;
};
