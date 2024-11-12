import { httpClient } from "./http";

export const fetchRegionLocation = async (region: string) => {
  const response = await httpClient.get(`/regionlocation/${region}`);
  const { regionLocation } = response.data;
  console.log(regionLocation);
  return regionLocation.response;

  /*
const API_KEY = "CFFEBF70-3920-3987-A39F-E53BD2A6056C";
const API_URL = "http://localhost:5173";

const response = await httpClient(
    `https://api.vworld.kr/req/data?service=data&request=GetFeature&data=LT_C_ADSIGG_INFO&key=${API_KEY}&domain=${API_URL}/&format=json&attrFilter=full_nm:like:${region}&geometry=false`
  );
*/

  // 이렇게 바로 front에서 API를 요청하지 않고
  // 백엔드에서 cors에 대한 설정 후 해당 데이터를 받아온 후 프론트에 전달
};

/* 백엔드 코드
app.get(`/regionlocation/:region`, async (req, res) => {
  const { region } = req.params;
  console.log(region);
  const data = await fetch(
    `https://api.vworld.kr/req/data?service=data&request=GetFeature&data=LT_C_ADSIGG_INFO&key=${API_KEY}&domain=${API_URL}/&format=json&attrFilter=full_nm:like:${region}&geometry=false`
  );
  const regionLocation = await data.json();

  res.json({ regionLocation: regionLocation });
  res.end();
});

*/
