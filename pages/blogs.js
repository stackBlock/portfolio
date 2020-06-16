import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { useGetUser } from "../actions/user";

const Blogs = () => {
  const { user, userLoading } = useGetUser();
  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage>
        <h1>I am a blogs page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Blogs;
