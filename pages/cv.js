import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import { useGetUser } from "actions/user";
import withAuth from "hoc/withAuth";
import { Row, Col } from "reactstrap";

const CV = () => {
  const { user, userLoading } = useGetUser();
  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage
      title="CV - Anthony Stachowitz">
        <Row>
          <Col md={{size: 8, offset: 2}}>
          <iframe style={{width: '100%', height: '800px'}} src='/Stachowitz_resume_20.pdf' />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default CV;
//export default withAuth(CV)();
