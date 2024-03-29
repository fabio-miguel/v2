import GolfImg from "../images/projects/Golf-cover.jpg";
import SkateImg from "../images/projects/SKTBS-cover.jpg";
import { Helmet } from "react-helmet-async";
const Releases = () => {
  return (
    <>
      <Helmet>
        <title>Releases - fabiomiguel.com</title>
        <meta
          name="description"
          content="Fabio Miguel. www.fabiomiguel.com. Examples of Headless Shopify websites & Frontend Development"
        />
        <meta
          property="og:description"
          content="Fabio Miguel. www.fabiomiguel.com. Examples of Headless Shopify websites & Frontend Development"
        />
        <meta
          property="og:title"
          content="Fabio Miguel - Web Developer - Shopify Website References"
        />
      </Helmet>
      <div id="releases-page">
        <div className="container">
          <div className="releases-page-content">
            <div className="releases-page-title">
              <div className="right">
                <h1 className="blue first">FABIOMIGUEL</h1>
                <h1 className="red second">FABIOMIGUEL</h1>
                <h1 className="yellow third">FABIOMIGUEL</h1>
              </div>
            </div>
            <div className="releases-page-description">
              <h2>releases</h2>
              <div className="releases-grid">
                <div className="release-img-wrapper">
                  <a
                    href="https://fullstack-pack-core-golf.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GolfImg} alt="" />
                  </a>
                </div>
                <div className="release-img-wrapper">
                  <a
                    href="https://fullstack-pack-core-sktbs.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={SkateImg} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Releases;
