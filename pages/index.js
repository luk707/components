import base from "../docs/base";
import Layout from "../docs/layout";
import Readme from "../README.md";

const HomePage = () => (
  <Layout>
    <Readme />
  </Layout>
);

export default base(HomePage);
