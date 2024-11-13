import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("error", error);

  let title = "예기치 못한 에러가 발생했습니다.";
  let message = "";

  if (isRouteErrorResponse(error) && error.status === 404) {
    title = "404 Not Found";
    message = "페이지를 찾을 수 없습니다.";
  }

  return (
    <div className="text-center">
      <h4>{title}</h4>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
