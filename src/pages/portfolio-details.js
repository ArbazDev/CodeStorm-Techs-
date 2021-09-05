import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import { Route } from "react-router-dom"
import loadable from '@loadable/component'
// import ProtfolioDetails from "@/components/protfolio-details";
const ProtfolioDetails = loadable(() => import('../components/protfolio-details'))
import RelatedPortfolio from "@/components/related-portfolio";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
// import { Suspense } from "@loadable/component";
// import loading from "@/components/loading.js";

// import ModalPortfolio from "@/components/portfoliomodal";
// import { graphql , useStaticQuery } from "gatsby";
// import PortfolioOne from "src/components/portfolio-one";


const PortfolioDetailsPage = (data) => {
  // console.log(data)
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Portfolio Details Page">
          <HeaderOne />
          <PageBanner title="Portfolio Details" name="Portfolio" />
          <ProtfolioDetails data = {data}/>
          {/* <ModalPortfolio data = {data}/> */}
          {/* <PortfolioOne/>  */}
          {/* <RelatedPortfolio /> */}
          <Footer />
        </Layout>

      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioDetailsPage;
