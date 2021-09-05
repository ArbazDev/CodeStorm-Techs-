// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import SectionTitle from "./section-title";
// import PortfolioCard from "@/components/portfolio-card";
// import { PortfolioHomeData, PortfolioData } from "@/data";
// import { graphql,useStaticQuery } from "gatsby";



// export const Portquery = graphql`
// query {
//   allStrapiPortfolio {
//     nodes {
//       image {
//         localFile {
//           childImageSharp {
//             gatsbyImageData(width:250)
//           }
//         }
//       }
//       title
//       categories
//       url
//     }
//   }
// }
// `

// const PortfolioHome = () => {
//   const { sectionContent } = PortfolioHomeData;
//   const data = useStaticQuery(Portquery)
//   // {console.log(data)}
//   return (
//     <section className="commonSection porfolio">
//       <Container>
//         <Row>
//           <Col lg={12} className="text-center">
//             <SectionTitle data={sectionContent} />
//           </Col>
//         </Row>
//         <Row id="Grid">
//           <div className="custom">
//             <Row>
//               {data.allStrapiPortfolio.nodes.map((post,index)=>(
//                 <Col lg={4} md={6} sm={12} key={index}>
//                   <PortfolioCard data={post} />
//                 </Col>
//               ))}
//             </Row>
//           </div>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default PortfolioHome;
