import React from "react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { withAuth0 } from "@auth0/auth0-react";
import CreatePost from "./CreatePost";

class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         singlePost: null,
         submitted: false,
         createPost: false,
      };
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit = (e) => {
      this.setState({ submitted: true, createPost: false });
      e.preventDefault();
   };

   render() {
      const getSinglePost = (e) => {
         fetch(`http://localhost:3002/${e}`)
            .then((res) => res.json())
            .then((post) => {
               this.setState({ singlePost: post });
            });
      };
      if (this.state.createPost) {
         return <CreatePost submit={this.handleSubmit} />;
      }
      if (this.state.singlePost) {
         const post = this.state.singlePost;
         return (
            <div className="singlePost">
               <button
                  onClick={() => {
                     this.setState({ singlePost: null });
                  }}
               >
                  Exit
               </button>
               <div>{post.cohort}</div>
               <h3>{post.title}</h3>
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
      }
      return (
         <>
            <div className="welcome">Welcome {this.props.auth0.user.given_name || this.props.auth0.user.nickname}!</div>
            <button
               onClick={() => {
                  this.setState({ createPost: true });
               }}
            >
               Create Resource
            </button>
            <div className="resourceContainer">
               {this.props.posts.map((post) => {
                  return (
                     <div className="resourceCard" key={post.id}>
                        <div className="cohort">{post.cohort}</div>
                        <h3
                           className="resourceTitle"
                           id={post.id}
                           onClick={(e) => {
                              getSinglePost(e.target.id);
                           }}
                        >
                           {post.title}
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
