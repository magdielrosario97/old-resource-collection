import React from "react";

class Head extends React.Component {
   render() {
      return (
         <div className="Head">
            <h1 id="title">The Resource Collection</h1>
            <div id="OLU">Operation Level Up</div>
            <input id="search" placeholder="Search..."></input>
         </div>
      );
   }
}

export default Head;
