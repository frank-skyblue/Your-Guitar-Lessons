// TODO: Remove this line after implementing authorization
const userAdmin = true;

export default function RoleRoute(props: { element: any; admin: any }) {
  if (userAdmin) {
    return props.admin;
  } else {
    return props.element;
  }
}
