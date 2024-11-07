import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

interface CredentialResponse {
  credential?: string;
}

const GoogleLoginButton = () => {
  const onSuccessGoogle = (credentialResponse: CredentialResponse) => {
    console.log("credentialResponse", credentialResponse);
  };

  return (
    <>
      {CLIENT_ID && (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <GoogleLogin
            onSuccess={onSuccessGoogle}
            onError={() => {
              console.log("Login Failed");
            }}
          ></GoogleLogin>
        </GoogleOAuthProvider>
      )}
    </>
  );
};

export default GoogleLoginButton;
