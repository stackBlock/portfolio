import { Row, Col } from "reactstrap";
import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import Link from "next/link";
import { useGetUser } from "../../actions/user";
import PortfolioApi from "../../lib/api/portfolio";
import PortfolioCard from "../../components/portfolioCard";
import { useRouter } from "next/router";

const Portfolios = ({ portfolios }) => {
  const router = useRouter();
  const { user, userLoading } = useGetUser();

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage className="portfolio-page" header={"Portfolios"}>
        <Row>
          {portfolios.map((portfolio) => (
            <Col
              key={portfolio._id}
              onClick={() => {
                router.push("/portfolios/[id]", `/portfolios/${portfolio._id}`);
              }}
              md="4"
            >
              <PortfolioCard portfolio={portfolio} />
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
  };
}

// export async function getServerSideProps(props) {
//   const json = await new PortfolioApi().getAll();
//   const portfolios = json.data;
//   return { props: { portfolios } };
// }

export default Portfolios;
