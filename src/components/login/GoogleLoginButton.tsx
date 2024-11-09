import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { httpClient } from "../../api/http";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

interface CredentialResponse {
  credential?: string;
}

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const onSuccessGoogleLogin = async (
    credentialResponse: CredentialResponse
  ) => {
    /* 임시 */
    try {
      const response = await httpClient.post("unknown", {
        token: credentialResponse.credential,
      });
      const data = response.data;

      if (data.isNewUser) {
        navigate("/signup");
      } else {
        navigate("/");
      }
    } catch (error) {
      /* 에러처리 생각중 */
      console.log(error);
    }
  };

  const onErrorGoogleLogin = (error: void) => {
    console.log(error);
  };

  return (
    <>
      {CLIENT_ID && (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <GoogleLogin
            onSuccess={onSuccessGoogleLogin}
            onError={onErrorGoogleLogin}
          ></GoogleLogin>
        </GoogleOAuthProvider>
      )}
    </>
  );
};

export default GoogleLoginButton;
