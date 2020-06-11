import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    let post = {};
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${query.id}`
      );
      post = res.data;
    } catch (e) {
      console.log(e);
    }
    console.log(post);
    return { portfolio: post };
  }

  render() {
    const { portfolio } = this.props;
    return (
      <BaseLayout>
        <h1>I am a portfolio page</h1>
        <h1>{portfolio.title}</h1>
        <p>{portfolio.body}</p>
        <p>{portfolio.id}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);

// import axios from "axios";
// import BaseLayout from "../../components/layouts/BaseLayout";
// import { withRouter } from "next/router";

// function PortfolioDetail({ portfolio }) {
//   return (
//     <BaseLayout>
//       <h1>{portfolio.title}</h1>
//       <p>BODY: {portfolio.body}</p>
//       <p>ID: {portfolio.id}</p>
//     </BaseLayout>
//   );
// }

// //Called outside PortfolioDetail
// PortfolioDetail.getInitialProps = async (ctx) => {
//   let portfolio;
//   try {
//     const res = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${ctx.query.id}`
//     );
//     portfolio = res.data;
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
//   //This will be passed to PortfolioDetail
//   return { portfolio };
// };

// export default withRouter(PortfolioDetail);
