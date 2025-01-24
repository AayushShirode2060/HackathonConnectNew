import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><script src="https://cdn.lordicon.com/lordicon.js"></script>
      </head>
      <body className="">
      <SessionWrapper>
        <Navbar/>
        <div className="main h-[80vh] overflow-y-scroll">
        {children}
        </div>
        <Footer/>
      </SessionWrapper>
      </body>
    </html>
  );
}
