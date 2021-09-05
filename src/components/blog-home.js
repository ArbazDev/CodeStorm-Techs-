import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
const BlogCard  = loadable(()=>import("@/components/blog-card"));
import { BlogHomeSection } from "@/data";
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
            gatsbyImageData(width:200)
          }
        }
      }
      date
    }
  }
}

`
// {console.log(data)}

const BlogHome = () => {
  const data = useStaticQuery(query)
  // {console.log(data)}
  return (
    <section className="commonSection blog">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={BlogHomeSection} />
          </Col>
        </Row>
        <Row>
          {data.allStrapiArticle.nodes.map((posts, index) => (
            <Col lg={4} sm={12} md={6} key={index}>
              <BlogCard data={posts} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
