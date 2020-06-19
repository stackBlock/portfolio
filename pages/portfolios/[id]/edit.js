import BaseLayout from "../../../components/layouts/BaseLayout";
import BasePage from "../../../components/BasePage";
import withAuth from "../../../hoc/withAuth";
import { useGetPortfolio } from "../../../actions/portfolios";
import { useRouter } from "next/router";
import PortfolioForm from "../../../components/PortfolioForm";
import PortfolioApi from "../../../lib/api/portfolio";
import { Row, Col } from "reactstrap";

const PortfolioEdit = ({ user }) => {
  const router = useRouter();
  const { data } = useGetPortfolio(router.query.id);
  debugger;

  return (
    <BaseLayout user={user} userLoading={false}>
      <BasePage header="Portfolio Edit">
        <Row>
          <Col>
            {data && (
              <PortfolioForm
                onSubmit={(data) => alert(JSON.stringify(data))}
                initialData={data}
              />
            )}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioEdit)("admin");
