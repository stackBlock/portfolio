import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { authorizeUser, withAuth } from "../utils/auth0";

const OnlyAdminSSR = ({ user, title }) => {
  return (
    <>
      <BaseLayout user={user} userLoading={false}>
        <BasePage>
          <h1 className="customClass">
            I am onyadminSSR page - {user && user.name}
          </h1>
          <p>{title}</p>
        </BasePage>
      </BaseLayout>
      ;
    </>
  );
};

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
})('admin');

export default OnlyAdminSSR;
