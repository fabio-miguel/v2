import decagram from "../images/hero/decagram.png";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="about__header">
            <div className="decagram-container">
              <div className="decagram-about">
                <img src={decagram} alt="" className="rotating-about-image" />
                <div className="text-about-container">
                  <div className="text-about">
                    <p>PROBABLY BEST FRIENDS</p>
                    <p> WITH YOUR DOG</p>
                  </div>
                </div>
              </div>
            </div>

            <h2>
              WHAT I DO <span>In a Nutshell</span>
            </h2>
          </div>

          <div className="about__content">
            <div className="about-text-right">
              <p>
                I create things that live on the internet! I'm specialisised in
                developing creative, elevated experiences whether that be
                ecommerce stores or marketing websites. Open ears to cool ideas!
              </p>
              <div className="links-container">
                <div className="about-social-links">
                  <a
                    href="https://github.com/Fabio-miguel"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-brands fa-square-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fabio-miguel-fernandes-38073327b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
