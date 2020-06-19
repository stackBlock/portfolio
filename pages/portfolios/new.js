import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import withAuth from "../../hoc/withAuth";
import { Col } from "reactstrap";
import PortfolioForm from "../../components/PortfolioForm";
import { useCreatePortfolio } from "../../actions/portfolios";
import Redirect from "../../components/shared/Redirect";

const PortfolioNew = ({ user, userLoading }) => {
  const [createPortfolio, { data, loading, error }] = useCreatePortfolio();

  if (data) {
    return <Redirect to="/portfolios" />;
  }

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Create Portfolio">
        <Col>
          <PortfolioForm onSubmit={createPortfolio} />
          { error && <div className="alert alert-danger mt-2">{error}</div>}
        </Col>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew)("admin");
