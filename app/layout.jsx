import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import ProgressBar from "@components/ProgressBar";
import ToastProvider from "@components/ToastProvider";

export const metadata = {
  title: "Prompt Hub",
  description: "Discover and share AI Prompts.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Provider>
          <ProgressBar />
          <ToastProvider/>
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