import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Head from "./components/Head";
import Navi from "./components/Navi";
import Home from "./components/Home";
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {
   state = {
      loading: true,
      loadingMessage: "The magic internet people are loading your content!",
      hasError: false,
      errorMessage: "Hmm... Something is broken. Try again soon.",
      resources: null,
      user: null,
   };

   componentDidMount() {
      fetch("http://localhost:3002/")
         .then((res) => res.json())
         .then((posts) => {
            console.log();
            this.setState({ resources: posts, loading: false });
         });
   }

   render() {
      console.log(this.props.auth0.isAuthenticated);
      if (this.state.loading) {
         return <Loading loading={this.state.loadingMessage} />;
      }
      if (this.state.hasError) {
         return <Error error={this.state.errorMessage} />;
      }
      if (this.props.auth0.isAuthenticated) {
         return (
            <>
               <Head />
               <Navi />
               <div className="reactive">
                  <Routes>
                     <Route
                        path="/"
                        element={<Home posts={this.state.resources} />}
                     />
                  </Routes>
               </div>
            </>
         );
      } else {
         return <Login />;
      }
   }
}

export default withAuth0(App);
