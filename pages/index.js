import Head from "next/head";

import { ThemeProvider } from "../Context/ThemeContext";
import { Container } from "../components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Search</title>
        <meta
          name="description"
          content="Get better search results from Google by limiting sites, file extensions, dates and more"
        />
        <meta
          name="keywords"
          content="Google search, Advanced Search, Accurate Search"
        />
        <meta name="author" content="Rohit Kashyap" />
      </Head>
      <ThemeProvider>
        <div className="bg-light-gray transition-colors dark:bg-black">
          <Container />
        </div>
      </ThemeProvider>
    </>
  );
}
