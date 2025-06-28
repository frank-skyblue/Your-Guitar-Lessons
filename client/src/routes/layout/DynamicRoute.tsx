import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

export default function DynamicRoute(props: {
  authenticationPage: boolean;
  landingPage: boolean;
  element: any;
}) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (props.authenticationPage && isAuthenticated) {
    return <Navigate to="/" />;
  } else if (
    !props.authenticationPage &&
    !props.landingPage &&
    !isAuthenticated
  ) {
    return <Navigate to="/about" />;
  } else {
    return props.element;
  }
}
