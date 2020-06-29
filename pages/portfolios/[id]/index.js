import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import { formatDate } from 'helpers/functions';
import { useGetUser } from "actions/user";
import PortfolioApi from "lib/api/portfolio";

const Portfolio = (props) => {
  const { portfolio } = props;
  const { user, userLoading } = useGetUser();
  console.log(props);
  return (
    <BaseLayout navClass="transparent" user={user} userLoading={userLoading}>
      <BasePage
        title={`${portfolio.title} - Anthony Stachowitz`}
        noWrapper
        indexPage
        metaDescription={portfolio.description}
      >
        <div className="portfolio-detail">
          <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner page-cover">
              <h1 class="cover-heading">{portfolio.title}</h1>
              <p class="lead dates">
                {formatDate(portfolio.startDate)} -{" "}
                {formatDate(portfolio.endDate) || "Present"}
              </p>
              <p class="lead info mb-0">
                {portfolio.jobTitle} | {portfolio.company} |{" "}
                {portfolio.location}
              </p>
              <p class="lead">{portfolio.description}</p>
              <p class="lead">
                <a
                  href={portfolio.companyWebsite}
                  target="_"
                  class="btn btn-lg btn-secondary"
                >
                  Visit Company
                </a>
              </p>
            </main>
          </div>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

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

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return {
    props: { portfolio },
  };
}

export default Portfolio;
