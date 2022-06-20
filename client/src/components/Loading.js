import React from "react";

class Loading extends React.Component {
   render() {
      return <h1>{this.props.loading}</h1>;
   }
}

export default Loading;
