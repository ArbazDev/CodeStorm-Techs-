import React from "react";
import { graphql,useStaticQuery, Link } from "gatsby";


const PortfolioCard = ({data}) => {
  const { image, title, categories, Slug } = data;
  // console.log(image[0].localFile.childImageSharp.gatsbyImageData.images.fallback.src)
  return (
    <div className={`singlefolio`}>
      <img style = {{height:400}} src={image[0].localFile.childImageSharp.gatsbyImageData.images.fallback.src} alt={title} />
      <div className="folioHover">
        {/* <a className="cate" href="#">
          {data.data.pageContext.categories.map(cat => cat + ", ")}
        </a> */}
        <h4>
          <Link to = {Slug}>{title}</Link>
        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;
