import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioData } from "@/data";
import loadable from "@loadable/component";
const PortfolioCard = loadable(()=>import( "@/components/portfolio-card"));
import { useStaticQuery, graphql } from "gatsby";
import { query } from "./team-carousel";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "gatsby";





const Portquery = graphql`
query {
  allStrapiPortfolio {
    nodes {
      Slug
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width:250)
          }
        }
      }
      title
      categories
      url
    }
  }
}
`

const PortfolioOne = () => {
  const data = useStaticQuery(Portquery)
  const carouselOptions = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#team-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  };

  return (
    <section className="commonSection team">
      <Swiper className="team_slider" {...carouselOptions}>
        {data.allStrapiPortfolio.nodes.map((post, index) => (
          <SwiperSlide key={index}>
            <PortfolioCard data={post} />
          </SwiperSlide>
        ))}

        <div className="swiper-pagination" id="team-carousel-pagination"></div>
      </Swiper>
    </section>
  );
}
// const PortfolioOne = () => {
//   const data = useStaticQuery(Portquery)
//   console.log(data)
//   return (
//     <section className="commonSection porfolioPage">
//       <Container>
//         <Row id="Grid">
//           <div className="custom">
//             <Row>
//               {data.allStrapiPortfolio.nodes.map((post, index) => (
//                 <Col lg={4} md={6} sm={12} key={index}>
//                   <PortfolioCard data={post} />
//                 </Col>
//               ))}
//             </Row>
//           </div>
        // </Row>
        // <Row>
        //   <Col lg={12} className="text-center">
        //     <Link to ={data.allStrapiPortfolio.nodes.Slug} className="common_btn red_bg" >
        //       <span>Load More</span>
        //     </Link>
        //   </Col>
        // </Row>
     {/* </Container>
    </section>
  )
              } */}
export default PortfolioOne;
