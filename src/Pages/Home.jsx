import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - fabiomiguel.com</title>
        <meta
          name="description"
          content="Fabio Miguel. www.fabiomiguel.com. Creative Web Developer who builds elevated Websites with specializims in Shopify"
        />
        <meta
          property="og:description"
          content="Fabio Miguel is a creative web developer offering frontend & ecommerce solutions. Specializing in creative UI/UX experiences, Shopify storefront builds and technical consulting."
        />
        <meta
          property="og:title"
          content="Fabio Miguel - Creative Software Engineer "
        />
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
