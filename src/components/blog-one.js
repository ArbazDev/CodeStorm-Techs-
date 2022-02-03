import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Paginations from "@/components/paginations";
import { BlogData } from "@/data";
const BlogCard = loadable(() => import("@/components/blog-card"));
import { graphql, useStaticQuery } from "gatsby";
import loadable from "@loadable/component";




const query = graphql`
{
  allStrapiArticle {
    nodes {
      Slug
      title
      image {
        localFile {
          childrenImageSharp {
            gatsbyImageData(quality: 10, pngOptions: {compressionSpeed: 10})
          }
        }
      }
      date
    }
  }
}


`

const BlogOne = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <section className="commonSection blogPage">
      <Container>
        <div className="blog_thu">
          <img src={data.allStrapiArticle.nodes[0].image.localFile.childrenImageSharp[0].gatsbyImageData.images.fallback.src} />
        </div>
        <Row>
          {data.allStrapiArticle.nodes.map((post, index) => (
            <Col lg={4} sm={12} md={6} key={index}>
              <BlogCard data={post} />
            </Col>
          ))}
        </Row>
        <Paginations />
      </Container>
    </section>
  );
};

export default BlogOne;
