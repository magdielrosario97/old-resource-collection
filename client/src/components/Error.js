import React from "react";

class Error extends React.Component {
   render() {
      return <h1>{this.props.error}</h1>;
   }
}

export default Error;
