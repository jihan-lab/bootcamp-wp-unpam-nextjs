import Head from "next/head";
import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Zoom";
import Jump from "react-reveal/Zoom";

import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  const name = "Jihan Abdul";
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className="parallax">
          <Fade top>
            <Navbar />
          </Fade>
        </div>
        <div className="d-flex py-4 flex-row bg-light justify-content-center align-items-center">
          <div className="products-thumbnail">
            <div className="products-image">
              <Image
                priority
                src="/images/profile.jpg"
                className="img"
                height={144}
                width={144}
                alt=""
              />
            </div>
          </div>
          <h5 className="ms-4" style={{ maxWidth: 550 }}>
            I'm JIhan Abdul Rohman, living in BSD.
            <span className="text-warning"> Have a huge interest </span>in
            games, programming and watch movie!
          </h5>
        </div>
        <Fade delay={1000}>
          <Card
            id="about"
            title="About"
            subTitle="Full Stack Web Programming"
            desc="I am a highly motivated Person with internship and training experience. In the previous role as a fullstack web developer. Passionate about building models that fix problems on a website, relevant skills including frontend and backend like html, javascript css, bootstrap, react js, node js, php, laravel. Have excellent interpersonal skills, agile, eager to learn and interested in learning new technologies including website and application development."
            link1="About me"
            link2="Contact me"
          />
        </Fade>
        <Fade>
          <div className="d-flex justify-content-end mb-5" id="education">
            <Card
              id="education"
              title="Education"
              subTitle="Information Engineering"
              desc="University Pamulang (2018-Present) - Information technology Graduated : present (estimated graduation : 2022) Dibimbing.Id (2021/2022) – FullStack Web Developer Graduated : Batch 2 2021/2022 (February 2022) BLKI Banten (2018) – AutoCAD Civil Graduated : Nov 2018."
              link1="My License"
              link2="Photo"
            />
          </div>
        </Fade>
        <div id="skills" style={{ backgroundColor: "#ddd" }} className="pb-5">
          <br></br>
          <div className="container">
            <h1 className="mt-5 mb-5">Skills</h1>
            <Jump>
              <div className="d-flex flex-row justify-content-between">
                <Skills img="/images/html.png" />
                <Skills img="/images/css.png" />
                <Skills img="/images/js.png" />
                <Skills img="/images/bootstrap.png" />
                <Skills img="/images/nodeJS.png" />
                <Skills img="/images/react.png" />
              </div>
            </Jump>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}
