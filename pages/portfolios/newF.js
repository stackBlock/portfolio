import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import withAuth from "../../hoc/withAuth";
import { Form, Col } from "reactstrap";
import PortfolioForm from "../../components/PortfolioForm";

const PortfolioNew = ({ user, userLoading }) => {
  const createPortfolio = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Create Portfolio">
        <Col>
          <PortfolioForm onSubmit={createPortfolio}/>
        </Col>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew)("admin");
