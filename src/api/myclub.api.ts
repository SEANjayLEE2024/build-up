import { httpClient } from "./http";

export const fetchMyclub = async () => {
  const response = await httpClient("/myclub");
  return response.data;
};

export const fetchMember = async () => {
  const response = await httpClient("/member");
  return response.data;
};
