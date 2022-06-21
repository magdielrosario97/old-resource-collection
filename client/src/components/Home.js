import React from "react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { withAuth0 } from "@auth0/auth0-react";

class Home extends React.Component {
   render() {
      return (
         <>
            <div className="welcome">
               Welcome {this.props.auth0.user.given_name}!
            </div>
            <div className="resourceContainer">
               {this.props.posts.map((post) => {
                  return (
                     <div className="resourceCard" key={post.id} id={post.id}>
                        <h3 className="resourceTitle">
                           {post.title}{" "}
                           {post.isstaff ? (
                              <u className="staff">Staff</u>
                           ) : (
                              <u className="cohort">{post.cohort}</u>
                           )}
                        </h3>
                        <div>{post.created_at.slice(0, 10)}</div>
                        <p>{post.body}</p>
                        <LinkPreview
                           className="url"
                           descriptionLength="20"
                           fallback={<a href={post.link}>{post.link}</a>}
                           imageHeight="100px"
                           showPlaceholderIfNoImage="true"
                           showLoader="false"
                           url={post.link}
                        />
                        <div>Posted by {post.username}</div>
                     </div>
                  );
               })}
            </div>
         </>
      );
   }
}

export default withAuth0(Home);
