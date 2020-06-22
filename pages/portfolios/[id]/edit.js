import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import withAuth from "hoc/withAuth";
import {
  useGetPortfolio,
  useUpdatePortfolio,
} from "actions/portfolios";
import { useRouter } from "next/router";
import PortfolioForm from "components/PortfolioForm";
import { Row, Col } from "reactstrap";
import { toast } from "react-toastify";

const PortfolioEdit = ({ user }) => {
  const router = useRouter();
  const [updatePortfolio, { data, error, loading }] = useUpdatePortfolio();
  const { data: initialData } = useGetPortfolio(router.query.id);

  const _updatePortfolio = async (data) => {
    try {
      await updatePortfolio(router.query.id, data);
      toast.success("Portfolio has been updated", { autoClose: 2000 });
    } catch  {
      toast.error("Something went terribly WRONG..", { autoClose: 3000 });
    }
  };

  return (
    <BaseLayout user={user} userLoading={false}>
      <BasePage header="Portfolio Edit">
        <Row>
          <Col>
            {initialData && (
              <PortfolioForm
                onSubmit={_updatePortfolio}
                initialData={initialData}
              />
            )}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioEdit)("admin");
