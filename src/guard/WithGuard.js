import { useSelector } from "react-redux";

const withGuard = (Component) => {
  const Warper = (props) => {
    const { loggedIn } = useSelector((state) => state.auth);

    return loggedIn ? <Component {...props} /> : <div>Please Login First</div>;
  };
  return Warper;
};

export default withGuard;
