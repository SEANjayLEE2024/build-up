import { Link } from "react-router-dom";

export default function CreateClub() {
  return (
    <>
      <button>
        <Link to={`createclub`}>클럽 창단</Link>
      </button>
    </>
  );
}
// router에도 camelcase사용하나?
