import "./App.css";
import Signin from "./containers/Signin/index";
import Signup from "./containers/Signup/index";
import Home from "./containers/Home/index";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { isUserLoggedIn, getInitialData } from "./actions";



function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
      // console.log(isUserLoggedIn())
    }
    // if(auth.authenticate){
    //   dispatch(getInitialData());
    // }
  }, [auth.authenticate]);

  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute> <Home></Home> </PrivateRoute>}></Route>
        // <PrivateRoute path="/" element={<PrivateRoute><Home></Home></PrivateRoute>}></PrivateRoute>

        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter> */}

      
       <Switch>
        <PrivateRoute path="/" exact component={Home} />
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
      
    </div>
  );
}

export default App;
