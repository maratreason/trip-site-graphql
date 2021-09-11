import * as React from "react";

import Layout from "../components/layout";
import Main from "../components/Main";
import Seo from "../components/seo";
import Testimonials from "../components/Testimonials";
import Trips from "../components/Trips";
import Stats from "../components/Stats";
import Email from "../components/Email";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Main />
        <Trips heading="Наши любимые направления" />
        <Testimonials />
        <Stats />
        <Email />
    </Layout>
);

export default IndexPage;
