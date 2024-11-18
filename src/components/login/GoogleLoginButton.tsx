import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { httpClient } from "../../api/http";
import Button from "../common/Button";
import googleImg from "../../assets/images/google-icon.png";

interface CodeResponse {
  code: string;
  state?: string;
}

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (
      credentialResponse: Omit<
        CodeResponse,
        "error" | "error_description" | "error_uri"
      >
    ) => {
      console.log("credentialResponse", credentialResponse);
      const { code } = credentialResponse;

      if (code) {
        try {
          const response = await httpClient.post("/", {
            code,
          });
          const { access_token, isNewUser } = response.data;

          if (access_token) {
            onSuccessGoogleLogin(access_token, isNewUser);
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    onError: () => {
      onErrorGoogleLogin();
    },
  });

  const onSuccessGoogleLogin = async (token: string, isNewUser: boolean) => {
    if (token) {
      localStorage.setItem("access_token", token);
      if (isNewUser) {
        navigate("/signup");
      } else {
        navigate("/");
      }
    }
  };

  const onErrorGoogleLogin = (error: void) => {
    console.log("에러");
    console.log(error);
  };

  return (
    <Button
      buttonEvent={login}
      className={
        "bg-white text-base-primary flex justify-center items-center font-semibold text-lg"
      }
    >
      <img className="mr-1" src={googleImg} alt="google" />
      구글로 시작하기
    </Button>
  );
};

export default GoogleLoginButton;
