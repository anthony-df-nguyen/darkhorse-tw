import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Script from "next/script";

export default function Page(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta type="description" content={props.description}></meta>
        <meta charSet="UTF-8"></meta>
        <meta name="author" content="Web Developer: Kenneth Kieu"></meta>
        {props.noindex && <meta name="robots" content="noindex"></meta>}
        <meta
          name="keywords"
          content="invest, portfolio, advisor, services, alan, flores, finanicial, consultant, business planning, investment, insurance, retirement, education, estate planning, tax, cash flow"></meta>
        {/* Global site tag (gtag.js) - Google Analytics */}
      </Head>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TZRBTHL4P9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TZRBTHL4P9',{'debug_mode':false,});
        `}
      </Script> */}
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
