import { useDispatch } from "react-redux";
import { logout } from "../../redux/counter/actions";
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <p>hope to see you soon</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(logout());
          history.push("/");
        }}
      >
        Are you sure to logout?
      </button>
    </>
  );
}
