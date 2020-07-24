import React, { Component } from 'react';
import './App.css'
import PostForm from './PostForm';
import AllPost from './AllPost';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PostForm />
                <AllPost />
            </div>
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
