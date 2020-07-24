import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <>
                <div className="bg-yellow">
                    <h2 className="center bg">CURD Redux</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mt-5">
                                <div className="card-header">
                                    User Form
                                </div>
                                <div className="card-body">
                                    <PostForm />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="card mt-5">
                                <div className="card-header">
                                    User List
                                </div>
                                <div className="card-body">
                                    <AllPost />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default App;


// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter,Route} from 'react-router-dom'
// import User from "./component/User";
// import {connect} from "react-redux";
//
// function App() {
//   return (
//       <div>
//           <BrowserRouter>
//               <Route path='/' exact component={User}/>
//           </BrowserRouter>
//
//       </div>
//   );
// }
//
// export const mapStateToProps = (state) => {
//     return {
//         user: state.user
//     }
// }
//
// export default connect(mapStateToProps)(App);
