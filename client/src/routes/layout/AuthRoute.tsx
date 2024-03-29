// TODO: Remove this line after implementing authentication
const userToken = true;

export default function AuthRoute(props: { element: any; auth: any }) {
  if (userToken) {
    return props.auth;
  } else {
    return props.element;
  }
}
