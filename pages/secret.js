import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import withAuth from "hoc/withAuth";

const Secret = ({ user, userLoading }) => {
  return (
    <>
      <BaseLayout user={user} userLoading={userLoading}>
        <BasePage>
          <h1 className="customClass">I am secret page - {user.name}</h1>
        </BasePage>
      </BaseLayout>
      ;
    </>
  );
};



export default withAuth(Secret)();
