import { getStoredToken } from "../../util/helpers";

export default function AuthRoute(props: { element: any; auth: any }) {
  const userToken = getStoredToken();

  if (userToken) {
    return props.auth;
  } else {
    return props.element;
  }
}
