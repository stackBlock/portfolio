import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

class Index extends React.Component {
  render() {
    return (
      <BaseLayout>
        <h1 className="customClass">I am an index/home page</h1>
      </BaseLayout>
    );
  }
}

export default Index;
