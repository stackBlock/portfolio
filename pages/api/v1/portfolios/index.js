import PortfolioApi from "lib/api/portfolio";
import auth0 from "utils/auth0";

export default async function createPortfolio(req, res) {
  try {
    const {accessToken} = await auth0.getSession(req);
    const json = await new PortfolioApi(accessToken).create(req.body);
    return res.json(json.data);
  } catch (error) {
    return res.status(error.status || 422).json(error.response.data);
  }
}
