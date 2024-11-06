import { useEffect, useState } from "react";
import { fetchMember } from "../api/myclub.api";
import { Member } from "../models/myclub.model";

export const useMember = () => {
  const [member, setMember] = useState<Member[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMember();
      setMember(data);
    };

    fetchData();
  }, []);

  return member;
};
