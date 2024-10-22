import { useDispatch, useSelector } from "react-redux";
import { logout } from "./userSlice";
import { useNavigate } from "react-router-dom";

const Username = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const username = useSelector((state) => state.user.username);
  const { username } = useSelector((state) => state.user);
  const handleclikc = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">
      {username}
      <button onClick={handleclikc}>logout</button>
    </div>
  );
};

export default Username;
