import React from "react";

class About extends React.Component {
   render() {
      return (
         <div className="about">
            <h3>About</h3>
            <p>
               Welcome to my PERN stack project built for the students
               participating in the Operation Level Up immersive at Galvanize.
               This website uses a few different packages found on npm to make
               it as interactive as possible such as React-Router. The idea of
               this page came about when I was trying to find a couple of
               resources my cohort had sent through Slack and Discord making it
               a little bit of a hassle to find. So with that being said, I am
               hoping that this app is your solution to finding the resources
               you need as easily as possible. If this page grows in users, I
               will continue to add features that will make finding resources as
               easy as possible.
            </p>
            <div>Sincerely,</div>
            <div>Magdiel Rosario (MCSP-12)</div>
            <h4>
               In Memory Of Hunter Ritter <u>1999-2022</u>
            </h4>
            <p>
               You were a huge part of our cohort family and will be dearly
               missed by all of us. We may have not known each other in person
               but you still moved us in the time we knew you.
            </p>
            <p>
               In his memory, I would like to share a link to useful resources
               to those who may be struggling. Do not be afraid to reach out to
               those around you.
            </p>
            <p>
               <a href="https://www.resilience.af.mil/Prevention-Tools/">
                  Resiliency Tools
               </a>
            </p>
         </div>
      );
   }
}

export default About;
