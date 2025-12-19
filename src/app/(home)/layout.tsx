import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex mx-auto max-w-7xl">
        <Navbar />
        {/* <Banner />
      <Feature />
      <Benefit />
      <Trending />
      <OurStars />
      <Testimonial />
      <Newslatter /> */}
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
