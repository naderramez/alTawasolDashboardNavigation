import { AlTawasolTitle } from "../Icons/Icons";
import TOO_LOGO from "../../assets/last-version/main-dash/too-logo.png";
import TOO_BUS_LOGO from "../../assets/last-version/main-dash/too bus logo.png";
import TOO_MAPS_LOGO from "../../assets/last-version/main-dash/too map logo.png";
import TOO_LOCATIONS_LOGO from "../../assets/last-version/main-dash/too locatins logo.png";
import SOCIAL_PLATFORM_CARD from "../../assets/last-version/main-dash/holder svg.svg";
import FACEBOOK_ICON from "../../assets/last-version/main-dash/Facebook.png";
import INSTAGRAM_ICON from "../../assets/last-version/main-dash/instagram.png";
import DRIBBLE_ICON from "../../assets/last-version/main-dash/Dribbble.png";
import "./home.css";

const Home = () => {
  return (
    <div className="pageContainer">
      <div id="alTawasolTitle">
        <AlTawasolTitle />
      </div>

      <div className="text-center mt-3">
        <div id="mainDashboard">
          Main Dashboard
        </div>
      </div>

      <div id="cards-container">
        <div className="text-center mb-5">
          ----------------- Choose System That You Want To Be Redirected To -----------------
        </div>

        <div id="cards-div">
          <div className="too-card">
            <div className="too-card-body">
              <img src={TOO_LOGO} height="170" alt="too logo" />
            </div>

            <div id="first-card-footer" className="too-card-footer">
              Too Cars System
            </div>
          </div>

          <div className="too-card">
            <div className="too-card-body">
              <img src={TOO_BUS_LOGO} height="170" alt="too logo" />
            </div>

            <div id="second-card-footer" className="too-card-footer">
              Too Bus System
            </div>
          </div>

          <div className="too-card">
            <div className="too-card-body">
              <img src={TOO_MAPS_LOGO} height="170" alt="too logo" />
            </div>

            <div id="third-card-footer" className="too-card-footer">
              Too Maps System
            </div>
          </div>

          <div className="too-card">
            <div className="too-card-body">
              <img src={TOO_LOCATIONS_LOGO} height="170" alt="too logo" />
            </div>

            <div id="fourth-card-footer" className="too-card-footer">
              Too Locations System
            </div>
          </div>

        </div>
      </div>

      <div id="social-accounts-container">

        <div id="social-accounts-title">
          -----------------
          &nbsp; &nbsp; &nbsp; &nbsp;
          Our Social Accounts
          &nbsp; &nbsp; &nbsp; &nbsp;
          -----------------
        </div>

        <div id="social-platform-cards-container">

          <div className="d-flex justify-content-center flex-wrap">
          
            <div className="social-platform-card">
              <img src={SOCIAL_PLATFORM_CARD} width="300" alt="card" />
              <div className="platform-card-div">
                <img className="side-logo" src={FACEBOOK_ICON} height="60" alt="facebook" />
                <div className="platform-card-text">Too Cars</div>
              </div>
            </div>
            
            <div className="social-platform-card">
              <img src={SOCIAL_PLATFORM_CARD} width="300" alt="card" />
              <div className="platform-card-div">
                <img className="side-logo" src={INSTAGRAM_ICON} height="60" alt="facebook" />
                <div className="platform-card-text">Too Cars</div>
              </div>
            </div>

            <div className="social-platform-card">
              <img src={SOCIAL_PLATFORM_CARD} width="300" alt="card" />
              <div className="platform-card-div">
                <img className="side-logo" src={FACEBOOK_ICON} height="60" alt="facebook" />
                <div className="platform-card-text">Too Maps</div>
              </div>
            </div>

            <div className="social-platform-card">
              <img src={SOCIAL_PLATFORM_CARD} width="300" alt="card" />
              <div className="platform-card-div">
                <img className="side-logo" src={INSTAGRAM_ICON} height="60" alt="facebook" />
                <div className="platform-card-text">Too Maps</div>
              </div>
            </div>

          </div>

          <div className="d-flex justify-content-center flex-wrap">
          
            <div className="social-platform-card">
              <img src={SOCIAL_PLATFORM_CARD} width="300" alt="card" />
              <div className="platform-card-div">
                <img className="side-logo" src={FACEBOOK_ICON} height="60" alt="facebook" />
                <div className="platform-card-text">Too Bus</div>
              </div>
            </div>
            
            <div className="social-platform-card">
              <img src={SOCIAL_PLATFORM_CARD} width="300" alt="card" />
              <div className="platform-card-div">
                <img className="side-logo" src={INSTAGRAM_ICON} height="60" alt="facebook" />
                <div className="platform-card-text">Too Bus</div>
              </div>
            </div>

            <div className="social-platform-card">
              <img src={SOCIAL_PLATFORM_CARD} width="300" alt="card" />
              <div className="platform-card-div">
                <img className="side-logo" src={FACEBOOK_ICON} height="60" alt="facebook" />
                <div className="platform-card-text">Too Locations</div>
              </div>
            </div>

            <div className="social-platform-card">
              <img src={SOCIAL_PLATFORM_CARD} width="300" alt="card" />
              <div className="platform-card-div">
                <img className="side-logo" src={INSTAGRAM_ICON} height="60" alt="facebook" />
                <div className="platform-card-text">Too Locations</div>
              </div>
            </div>

          </div>

        </div>

        <div className="text-center">Our Website</div>

        <div className="d-flex justify-content-center">
          <div className="social-platform-card">
            <img src={SOCIAL_PLATFORM_CARD} width="300" alt="card" />
            <div className="platform-card-div">
              <img className="side-logo" src={DRIBBLE_ICON} height="60" alt="facebook" />
              <div className="platform-card-text">Too Locations</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;