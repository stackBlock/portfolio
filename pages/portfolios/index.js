import { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import { useGetUser } from "actions/user";
import { useDeletePortfolio } from "actions/portfolios";
import PortfolioApi from "lib/api/portfolio";
import PortfolioCard from "components/portfolioCard";
import { useRouter } from "next/router";
import { isAuthorized } from "utils/auth0";
import useSWR from "swr";

const Portfolios = ({ portfolios: initialPortfolios }) => {
  const [portfolios, setPortfolios] = useState(initialPortfolios);

  const router = useRouter();
  const [deletePortfolio, { data, error }] = useDeletePortfolio();
  const { user, userLoading } = useGetUser();

  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm(
      "Are you sure you want to delete this portfolio?"
    );
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      setPortfolios(portfolios.filter((p) => p._id !== portfolioId));
    }
  };

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage className="portfolio-page" header={"Portfolios"}>
        <Row>
          {portfolios.map((portfolio) => (
            <Col
              key={portfolio._id}
              onClick={(e) => {
                router.push("/portfolios/[id]", `/portfolios/${portfolio._id}`);
              }}
              md="4"
            >
              <PortfolioCard portfolio={portfolio}>
                {user && isAuthorized(user, "admin") && (
                  <>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          "/portfolios/[id]/edit",
                          `/portfolios/${portfolio._id}/edit`
                        );
                      }}
                      className="mr-2"
                      color="warning"
                    >
                      Edit
                    </Button>

                    <Button
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                      color="danger"
                    >
                      Delete
                    </Button>
                  </>
                )}
              </PortfolioCard>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: { portfolios },
    unstable_revalidate: 1
  };
}

export default Portfolios;
