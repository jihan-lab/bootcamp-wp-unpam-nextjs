import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="border-top p-5 bg-dark">
        <div className="container">
          <div className="row mt-5 d-flex flex-row justify-content-between">
            <div className="col-5">
              <a href="">
                <Image src="/images/fb.png" height={30} width={30}></Image>
              </a>
              <a href="">
                <Image src="/images/twitter.png" height={30} width={30}></Image>
              </a>
              <a href="">
                <Image src="/images/ig.png" height={30} width={30}></Image>
              </a>
            </div>
          </div>
          <div className="row mt-2 justify-content-between">
            <div className="col-5 mt-3">
              <p>All Rights Reserved by Hefa Store Copyright 2019</p>
            </div>
            <div className="col-3 col-sm-5 col-md-6 pr-0">
              <nav className="justify-content-end nav text-right">
                <a className="nav-link" href="">
                  Jobs
                </a>
                <a className="nav-link" href="">
                  Developer
                </a>
                <a className="nav-link" href="">
                  Terms
                </a>
                <a className="nav-link" href="">
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
