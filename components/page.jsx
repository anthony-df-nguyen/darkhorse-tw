import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";

export default function (props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta type="description" content={props.description}></meta>
        <meta charset="UTF-8"></meta>
        <meta name="author" content="Web Developer: Kenneth Kieu"></meta>
        {props.noindex && <meta name="robots" content="noindex"></meta>}
        <meta
          name="keywords"
          content="invest, portfolio, advisor, services, alan, flores, finanicial, consultant, business planning, investment, insurance, retirement, education, estate planning, tax, cash flow"
        ></meta>
      </Head>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>{props.children}</main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
