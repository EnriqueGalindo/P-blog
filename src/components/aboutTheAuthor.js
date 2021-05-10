import React, { Component } from 'react';
import profilePic from "../images/PFPDrawnVer.png"

const links = {
    linkedin : "https://www.linkedin.com/in/enrique-galindo-5970ab159/",
    twitter : "https://twitter.com/egalindo_iv"
}

class AboutTheAuthor extends Component {
  render() {
    return(
        <>
        <section className="card">
            <div className="about_the_author_header">
                <img src={profilePic} alt="failed to find" />
                <h1 className="banner-text"> About The Author </h1>
            </div>
            <div className="socials-div">
                <a href={links.linkedin}>LinkedIn</a>
                <a href={links.twitter}>Twitter</a>
            </div>
        </section>
        </>
    )
  }
}

export default AboutTheAuthor;