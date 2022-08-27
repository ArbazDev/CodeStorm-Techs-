import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import BlogCard from "@/components/blog-card";
import { BlogHomeSection } from "@/data";
import { graphql,useStaticQuery } from "gatsby";

const query = graphql`
query {
  allStrapiArticle {
    nodes {
      Slug
      title
      image {
        localFile {
          childrenImageSharp {
            gatsbyImageData(sizes: "40")
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
        <div className="blog_thum">
          <img src={data.allStrapiArticle.nodes[0].image.localFile.childrenImageSharp[0].gatsbyImageData.images.fallback.src} />
        </div>
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
