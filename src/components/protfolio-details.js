import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "gatsby-transformer-sharp";
import loadable from '@loadable/component';
import SwiperCore, { Pagination, Navigation } from "swiper";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


SwiperCore.use([Pagination, Navigation]);
const ProtfolioDetails = data => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(data)
  const image = getImage(data.data.pageContext.data.image[0].localFile)

  if (modalIsOpen == false) {
    return (
      // <div>

      // </div>
      <div className="swipo">
        <div className="stick">
        <div class="box2" id="box3">
          {/* <Link to="/portfolio-5">Wordpress</Link> <br></br>
          <Link to="/mern">React js + Gatsby</Link>
          <Link to="">Graphic design</Link> */}
        </div>
        </div>
        <div className="aside" style={{textAlign:"center"}}>
          <Col lg={4} md={5} sm={12}>
            <div style={{textAlign:"center"}}>
            <GatsbyImage image={image}/>
            </div>
            <div className="singlePortfoio_content">
              <h3>{data.data.pageContext.data.title}</h3>
              <ReactMarkdown children={data.data.pageContext.data.body} />
            </div>
            <div className="singlePortfoio_content">
              <h4>Category:</h4>
              <p>
                {data.data.pageContext.data.categories}
                {/* {categories.map(({ name }, index) => (
              <a key={index} href={url}>
                {name},
              </a>
            ))} */}
              </p>
            </div>
            <div className="singlePortfoio_content">
              <h4>Date:</h4>
              <p>{data.data.pageContext.data.date}</p>
            </div>
          </Col>
        
        </div>
      </div>
    );
  };    
};

export default ProtfolioDetails;
