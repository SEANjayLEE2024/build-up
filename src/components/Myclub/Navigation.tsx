import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex item-center justify-around bg-gray-200 p-3">
      <Link to="/myclub">홈</Link>
      <Link to="/chat">채팅</Link>
    </div>
  );
};

export default Navigation;
