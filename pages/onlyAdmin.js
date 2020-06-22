import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import withAuth from "hoc/withAuth";

const OnlyAdmin = ({ user, userLoading }) => {
  return (
    <>
      <BaseLayout user={user} userLoading={userLoading}>
        <BasePage>
          <h1 className="customClass">I am only admin page - {user.name}</h1>
        </BasePage>
      </BaseLayout>
      ;
    </>
  );
};



export default withAuth(OnlyAdmin)('admin');