import React from "react";
import Layout from "../../components/Layout/index";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input/index";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signup} from '../../actions/user.actions'
import { useState } from "react";


function Signup() {

  const auth=useSelector(state=>state.auth)
  const user_signup=useSelector(state=>state.user)


  const dispatch=useDispatch();

  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');



// const handleSubmit=()=>{}
  const handleSubmit=(e)=>{
    e.preventDefault();

    const newuser={
      firstName,lastName,email,password
    }
    dispatch(signup(newuser))
  }

  if(auth.authenticate){
    return <Redirect to={'/'}></Redirect>
  }

  if(user_signup.message!=''){
    return <Redirect to={'/'}></Redirect>
  }
  

  // if(user_signup.loading){
  //   return <p> Loading......ERROR!</p>
  // }

  return (
    <Layout>
      <Container // class="d-flex justify-content-center" 
      style={{ marginTop: "4rem" }}
      >
        {user_signup.message}
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </Form.Group> */}

                  <Input
                    label="First Name"
                    type="text"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></Input>
                </Col>

                <Col md={6}>
                  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
              </Form.Group> */}
                  <Input
                    label="Last Name"
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    errorMessage=" "
                  ></Input>
                </Col>
              </Row>

              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group> */}

              <Input
                label="Email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage=" We'll never share your email with anyone else."
              ></Input>

              {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group> */}

              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                errorMessage=""
              ></Input>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signup;
