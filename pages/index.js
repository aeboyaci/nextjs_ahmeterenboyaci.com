import React from 'react';
import Home from "../components/Home";
import About from "../components/About";
import Head from "next/head";

const Index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ahmet Eren BOYACI</title>
        <meta name="twitter:card" content="Portfolio page of Ahmet Eren BOYACI" />
        <meta name="twitter:site" content="@aeboyaci" />
        <meta name="twitter:creator" content="@aeboyaci" />
        <meta name="twitter:image" content="/profile.jpg" />
        <meta property="og:title" content="Ahmet Eren BOYACI" />
        <meta property="og:url" content="https://ahmeterenboyaci.com/" />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:title" content="Ahmet Eren BOYACI" />

        <meta name="description" content="Ahmet Eren BOYACI - Senior Computer Science Student at TOBB University of Economics and Technology, Part-Time Software Engineer at Picus Security" />
        <meta property="og:description" content="Ahmet Eren BOYACI - Senior Computer Science Student at TOBB University of Economics and Technology, Part-Time Software Engineer at Picus Security" />
      </Head>
      <Home />
      <About />
      <div className="flex flex-row justify-center items-center py-2 space-x-2">
        <img src="/copyright.png" alt="copyright" height="14" width="14" />
        <span className="text-xs">Ahmet Eren BOYACI, All rights reserved</span>
      </div>
    </React.Fragment>
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

export default Index;