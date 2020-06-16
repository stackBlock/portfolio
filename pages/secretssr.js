import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { authorizeUser, withAuth } from "../utils/auth0";

const SecretSSR = ({ user, title }) => {
  return (
    <>
      <BaseLayout user={user} userLoading={false}>
        <BasePage>
          <h1 className="customClass">
            I am secretSSR page - {user && user.name}
          </h1>
          <p>{title}</p>
        </BasePage>
      </BaseLayout>
      ;
    </>
  );
};

// export const getServerSideProps = async ({ req, res }) => {
//   const user = await authorizeUser(req, res);

//   return {
//     props: { user },
//   };
// };

const getTitle = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ title: "My new Title" });
    }, 500);
  });
};

export const getServerSideProps = withAuth(async ({ req, res }, user) => {
  const title = await getTitle();
  return title;
})();

export default SecretSSR;
