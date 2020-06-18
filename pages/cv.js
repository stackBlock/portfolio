import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { useGetUser } from "../actions/user";
import withAuth from "../hoc/withAuth";

const CV = () => {
  const { user, userLoading } = useGetUser();
  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage>
        <h1>I am a CV page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default CV;
//export default withAuth(CV)();
