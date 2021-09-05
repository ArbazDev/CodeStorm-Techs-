import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Paginations from "@/components/paginations";
import { BlogData } from "@/data";
const BlogCard = loadable(()=>import("@/components/blog-card"));
import { graphql,useStaticQuery } from "gatsby";
import loadable from "@loadable/component";




const query = graphql`
query {
  allStrapiArticle {
    nodes {
      Slug
      title
      image {
        localFile {
          childrenImageSharp {
            gatsbyImageData(width: 150)
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
  // console.log(data)
  return (
    <section className="commonSection blogPage">
      <Container>
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
