import Head from "next/head";

import { ThemeProvider } from "../Context/ThemeContext";
import { Container } from "../components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Search</title>
      </Head>
      <ThemeProvider>
        <div className="bg-light-gray transition-colors dark:bg-dark-mode-black">
          <Container />
        </div>
      </ThemeProvider>
    </>
  );
}
