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

//하늘님이 -> 회원가입/로그인 카드인터랙션
//상하-> 내클럽과 관련된 페이지 개발을 맡게 되었고.

// 하늘님 파트가 먼저 끝나게 되면 그때 다시 나눠서 하기로함
