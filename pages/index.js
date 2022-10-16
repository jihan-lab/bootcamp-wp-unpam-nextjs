import Head from "next/head";
import Image from "next/image";
import Fade from "react-reveal/Zoom";

import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  const name = "Jihan Abdul";
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className="parallax">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#"></a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto text-uppercase">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#education">
                      Education
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="d-flex py-4 flex-row justify-content-center align-items-center">
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
        <Fade>
          <div id="about">
            <br></br>
            <div
              className="card mt-5 bg-light shadow-lg"
              style={{ width: 1000 }}
            >
              <div className="card-body">
                <h5 className="card-title">About</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  FullStack Web Programming
                </h6>
                <p className="card-text">
                  I am a highly motivated Person with internship and training
                  experience. In the previous role as a fullstack web developer.
                  Passionate about building models that fix problems on a
                  website, relevant skills including frontend and backend like
                  html, javascript css, bootstrap, react js, node js, php,
                  laravel. Have excellent interpersonal skills, agile, eager to
                  learn and interested in learning new technologies including
                  website and application development.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="d-flex justify-content-end mb-5" id="education">
            <br></br>
            <div
              className="card mt-5 bg-light shadow-lg"
              style={{ width: 1000 }}
            >
              <div className="card-body">
                <h5 className="card-title">Education</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Information Engineering
                </h6>
                <p className="card-text">
                  University Pamulang (2018-Present) - Information technology
                  Graduated : present (estimated graduation : 2022) Dibimbing.Id
                  (2021/2022) – FullStack Web Developer Graduated : Batch 2
                  2021/2022 (February 2022) BLKI Banten (2018) – AutoCAD Civil
                  Graduated : Nov 2018
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <div id="skills" style={{ backgroundColor: "#ddd" }} className="pb-5">
          <br></br>
          <div className="container">
            <h1 className="mt-5">Skills</h1>
            <div className="row align-items-center">
              <div className="col-2">
                <h3>HTML</h3>
              </div>
              <div className="col-10">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-2">
                <h3>CSS</h3>
              </div>
              <div className="col-10">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-2">
                <h3>JavaScript</h3>
              </div>
              <div className="col-10">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-2">
                <h3>BootStrap</h3>
              </div>
              <div className="col-10">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-2">
                <h3>React JS</h3>
              </div>
              <div className="col-10">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-2">
                <h3>Node JS</h3>
              </div>
              <div className="col-10">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/posts/first-post">Lets go to the first post page </Link>

        <footer
          style={{ height: 400, backgroundColor: "#000000", marginTop: 50 }}
        ></footer>
      </Layout>
    </>
  );
}
