import BaseLayout from "../../../components/layouts/BaseLayout";
import BasePage from "../../../components/BasePage";
import { useGetUser } from "../../../actions/user";
import PortfolioApi from "../../../lib/api/portfolio";

const Portfolio = (props) => {
  const { user, userLoading } = useGetUser();
  console.log(props);
  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Portfolio Detail">
        {JSON.stringify(props.portfolio)}
      </BasePage>
    </BaseLayout>
  );
};

// export async function getServerSideProps(props) {
//   const json = await new PortfolioApi().getById(props.query.id)
//   const portfolio = json.data;
//   return {props: {portfolio}}
// }


// executed at build time
export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
// get the paths we want pre-rendered based on id
  const paths = portfolios.map((portfolio) => {
    return {
      params: { id: portfolio._id },
    };
  });
// fallback false means pages not found will be resolved into 404 pages
  return { paths, fallback: false };
}

export async function getStaticProps({params}) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return {
    props: { portfolio },
  };
}

export default Portfolio;
