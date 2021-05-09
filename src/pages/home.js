import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom";
import { getFirebase } from "../firebase";
import bannerImage from "./BannerDrawn.png"
import Seo from "../seo_helmet"

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const history = useHistory()


  if (loading && !blogPosts.length) {
    getFirebase()
      .database()
      .ref("/posts")
      .orderByChild("dateFormatted")
      .once("value")
      .then(snapshot => {
        let posts = [];
        const snapshotVal = snapshot.val();
        for (let slug in snapshotVal) {
          posts.push(snapshotVal[slug]);
        }

        const newestFirst = posts.reverse();
        setBlogPosts(newestFirst);
        setLoading(false);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

console.log(getFirebase())
  return (
    <>
      <section className="top-banner-section">
        <div className="banner-image-div">
          <img className="banner-image" src={bannerImage} />
        </div>
        <div className="banner-overlay-div"></div>
        <div className="banner-text-div">
          <span className="banner-text">
            <Seo className="banner-h1-text" title="Script Kiddie 2 GOAT">Script Kiddie 2 GOAT</Seo>
            <p className="banner-body-text">My stories and experiences taking a non-traditional route in tech</p>
            <br></br>
            <p className="banner-credit">Banner art by Tanner Hebbel</p>
          </span>
        </div>
      </section>
     
      <main>
      {blogPosts.map(blogPost => (
        <section key={blogPost.slug} className="card">
          <img src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
          <div className="card-content">
            <h2>
              {blogPost.title} &mdash;{" "}
              <span style={{ color: "#5e5e5e" }}>{blogPost.datePretty}</span>
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: `${blogPost.content.substring(0, 200)}...`
              }}
            ></p>
            <Link to={`/${blogPost.slug}`}>Continue reading...</Link>
          </div>
        </section>
      ))}
      </main>
    </>
  );
};

export default Home;
