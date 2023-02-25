import {React,useState} from "react";
import Layout from "../../components/Layout/index";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import {Redirect} from 'react-router-dom'
import '../../style.css' 


function Signin() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');

  const auth=useSelector(state=>state.auth)
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,password
    };
    dispatch(login(user));
  };

  if(auth.authenticate){
    return <Redirect to={'/'}></Redirect>
  }

  return(
    <div>
      <Layout>
    {/* <h1 class="h3 mb-3 fw-normal">Please sign in</h1> */}

        <Container
          // class="d-flex justify-content-center"
          style={{ marginTop: "4rem"}}>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={userLogin}>
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
    </div>


  )
            }

  
export default Signin;



/// NEW Style Sign in ///////////////////

// return (
//   <div >
//     <div className="Auth-form-container">
//     <form className="Auth-form" onSubmit={userLogin}>
//       <div className="Auth-form-content">
//         <h3 className="Auth-form-title">Sign In</h3>
//         <div className="form-group mt-3">
//           {/* <label>Email address</label> */}
//           {/* <input
//             type="email"
//             className="form-control mt-1"
//             placeholder="Enter email"
//           /> */}
//             <Input 
//                 label="Email"
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 errorMessage=" We'll never share your email with anyone else."
//               ></Input>

//         </div>
//         <div className="form-group mt-3">
//           {/* <label>Password</label>
//           <input
//             type="password"
//             className="form-control mt-1"
//             placeholder="Enter password"
//           /> */}
//           <Input
//                 label="Password"
//                 type="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 errorMessage=""
//               ></Input>
//         </div>
//         <div className="d-grid gap-2 mt-3">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//         {/* <p className="forgot-password text-right mt-2">
//           Forgot <a href="#">password?</a>
//         </p> */}
//       </div>
//     </form>
//   </div>
//   </div>
// );
