import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import ProgressBar from "@components/ProgressBar";
import ToastProvider from "@components/ToastProvider";
import Head from "next/head";

export const metadata = {
  title: "Prompt Hub",
  description: "Discover and share AI Prompts.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        <link rel="icon" href="public\favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <Provider>
          <ProgressBar />
          <ToastProvider />
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app scrollbar-custom">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
