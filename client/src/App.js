import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Head from "./components/Head";
import Nav from "./components/Nav";
import Home from "./components/Home";

class App extends React.Component {
   state = {
      loading: true,
      loadingMessage: "The magic internet people are loading your content!",
      hasError: false,
      errorMessage: "Hmm... Something is broken. Try again soon.",
      resources: null,
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
      if (this.state.loading) {
         return <Loading loading={this.state.loadingMessage} />;
      }
      if (this.state.hasError) {
         return <Error error={this.state.errorMessage} />;
      }
      return (
         <>
            <Head />
            <Nav />
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
   }
}

export default App;
