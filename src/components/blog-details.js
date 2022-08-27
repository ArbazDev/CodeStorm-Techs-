import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogSidebar from "@/components/blog-sidebar";
import SinglePostCard from "@/components/single-post-card";

const BlogDetails = (data) => {
  // console.log(data)
  return (
    <section className="commonSection blogDetails">
      <Container>
        <Row>
          <Col lg={8}>
            <SinglePostCard data = {data.data}/>
          </Col>
          {/* <Col lg={4} className="sidebar">
            <BlogSidebar data = {data.data}/>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
