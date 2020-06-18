import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import withAuth from "../../hoc/withAuth";
import { Form, Col } from "reactstrap";
import PortfolioForm from "../../components/PortfolioForm";
import { createPortfolio } from "../../actions/portfolios";

const PortfolioNew = ({ user, userLoading }) => {
  const _createPortfolio = (data) => {
    createPortfolio(data);
  };

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Create Portfolio">
        <Col>
          <PortfolioForm onSubmit={_createPortfolio} />
        </Col>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew)("admin");
