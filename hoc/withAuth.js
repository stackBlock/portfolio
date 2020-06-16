import { useGetUser } from "../actions/user";
import Redirect from "../components/shared/Redirect";
import { isAuthorized } from "../utils/auth0";

const withAuth = (Component) => (role) => {
  return (props) => {
    const { user, userLoading } = useGetUser();
    console.log(props);

    if (userLoading) {
      return <p>Loading....</p>;
    }

    if (!user) {
      return <Redirect ssr to="/api/v1/login" />
    } else {
      if (role && !isAuthorized(user, role)) {
        return <Redirect ssr to="/api/v1/login" />
      }

      return <Component user={user} userLoading={userLoading} {...props}/>
    }
  }
}

export default withAuth;

// High order component

// function withAuth(Component) {
//   return function (props) {
//     return <Component title="Hello world" {...props} />;
//   };
// }

// const withAuth = (Component) => (props) => (
//   <Component title="Hello World" {...props} />
// );
