import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

const YourComponent = () => {
  return (
    <>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="your name"
      />
    </>
  );
};

export default function FirstPost() {
  const name = "Jihan Abdul";
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <Link href="/">
          <a>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt=""
            />
          </a>
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/">
            <a className={utilStyles.colorInherit}>{name}</a>
          </Link>
        </h2>
        <h1>First Post</h1>
        {/* <h2>
          <Link href="/">Back to home</Link>
        </h2> */}
        {/* <YourComponent /> */}
      </Layout>
    </>
  );
}
