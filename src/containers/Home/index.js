import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import Sidebar from "./sidebar";
import './style.css'



function Home() {
  return (
    <div>
      <Layout>
        {/* <Sidebar></Sidebar> */}
<Container fluid>
        <Row>
          <Col md={2} className="sidebar"> Sidebar</Col>
          <Col md={10} style={{marginLeft:"auto"}}> Container</Col>

        </Row>
        </Container>
      
        {/* <div

          className="jumbotron jumbotron-fluid text-center"
          style={{ backgroundColor: "#F2F2F2", padding: "5rem" }}>
          <div className="container">
            <h1 className="display-4 ">Welcome to Admin Dashboard</h1>
            <p className="lead">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into el
            </p>
          </div>
        </div> */}
      </Layout>
    </div>
  );
}

export default Home;
