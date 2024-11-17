import GoogleLoginButton from "../components/login/GoogleLoginButton";
import logoImg from "../assets/images/main-logo.png";
import FixedButtonLayout from "../components/common/FixedButtonLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const LoginPage = () => {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="px-6 h-screen bg-no-repeat bg-center bg-splash bg-cover w-[calc(100%+48px)] -ml-6">
        <div className="py-12 flex flex-col justify-center items-center">
          <h1 className="sr-only">빌드업</h1>
          <img className="mb-3" src={logoImg} alt="logo" />
          <span className="text-lg text-white font-semibold">
            아마추어도 제대로 즐기고 싶으니까
          </span>
        </div>
        <FixedButtonLayout className="bg-transparent">
          <GoogleLoginButton />
        </FixedButtonLayout>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
