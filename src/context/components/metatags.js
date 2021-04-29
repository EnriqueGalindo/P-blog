import React from 'react';
import {Helmet} from 'react-helmet';

const MetaTags = ( {post} ) => {
    // Note: The manifest is the 'creat-react-app' manifest.
    // Adding it in the head wouldn't matter until it were filled out.
    // basically, if someone wants a shortcut to your blog on their phone screen,
    // the manifest will provide information about the image, name, etc for the resulting icon, link, and blah.
   return(   
        post ? (
        <Helmet>
            <title>SITE NAME - {post.title}</title>

            {/* If you only want one version of a page, say the home page, to be indexed use this tag.
                In the case of a personal blog, probably not necessary */}
            {/* <link rel="canonical" href="" /> */}

            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>

            {/* This is the overall description for the blog. This could be hard coded or from firebase, but its typically the same everywhere */}
            <meta name="description" content="E.G.s Blog" />

            {/* OG == Open Graph, Facebook, Linkedin, Pinterest, etc use it to find what img you want to share, the description, post title, ect */}
            <meta property="og:site_name" content="Static, like E.Gs Blog" />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.description} />
            <meta property="og:image" content={post.image} />
            {/* Uh?, the current URL would be something like... */}
            <meta property="og:url" content={window.location} />

            {/* Same as above but for twitter */}
            {/* Some twitter tags will read the OG tag, for info:
            https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Alt text for image" />

            {/* Non-Essential, But Required for Analytics */}
            {/* <meta property="fb:app_id" content="your_app_id" /> */}
            {/* <meta name="twitter:site" content="@website-username"></meta> */}

        </Helmet>
        ) :
        (
        <Helmet>
            {/* We need the if/else b/c there isn't a POST for the HOME page. */}
            {/* Could grab infor from DB or hardcode. */}
            <title>SITE NAME - HOME </title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            <meta name="description" content="E.G.s Blog" />
            <meta property="og:site_name" content="Static, like E.Gs Blog should be lol" />
            <meta property="og:title" content="" />
            <meta property="og:description" content="" />
            <meta property="og:image" content="" />
            <meta property="og:url" content="" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Alt text for image" />
        </Helmet>
        )
   ) 
};

export default MetaTags;