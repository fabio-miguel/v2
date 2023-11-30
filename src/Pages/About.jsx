import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - fabiomiguel.com</title>
        <meta
          name="description"
          content="Fabio Miguel. www.fabiomiguel.com. Creative Web Developer specialising in Front-End Web Development and Shopify E-commerce Solutions."
        />
        <meta
          property="og:description"
          content="Fabio Miguel is a creative web developer offering frontend & ecommerce solutions. Specializing in creative UI/UX experiences & Shopify builds."
        />
        <meta
          property="og:title"
          content="Fabio Miguel - Web Developer - Shopify Expert "
        />
      </Helmet>
      <div id="about-page">
        <div className="container">
          <div className="about-page-content">
            <div className="about-page-title">
              <div className="right">
                <h1 className="blue first">FABIOMIGUEL</h1>
                <h1 className="red second">FABIOMIGUEL</h1>
                <h1 className="yellow third">FABIOMIGUEL</h1>
              </div>
            </div>
            <div className="about-page-description">
              <h2>about</h2>
              <p>
                Fabio Miguel is a Creative Web Developer, specialising in
                Front-End Web Development and Shopify E-commerce Solutions. As a
                Founding Member of 3:16, a dynamic design and technology
                collective formed by like-minded friends, he actively engages in
                collaborative efforts to bring innovative projects to life.
                Additionally, Fabio collaborates with other trendsetting
                creative studios, contributing his expertise to bring cool and
                inspiring ideas into reality. His primary focus revolves around
                crafting bespoke websites tailored to clients seeking to
                establish a distinctive online presence, whether for an
                ecommerce storefront, business, marketing initiative, portfolio
                site, and more. This is his self-created website.
              </p>
              <h3>
                Current Availability: Book is open for Projects Beginning of Q1
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
