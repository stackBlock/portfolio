import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import { useGetUser } from "actions/user";

const About = () => {
  const { user, userLoading } = useGetUser();
  debugger;
  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage>
        <h1 className="customClass">I am an about page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
