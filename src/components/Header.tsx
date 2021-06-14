import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faClock, faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(): JSX.Element {
  return (
    <header className="w-full h-56 flex flex-col justify-between items-start">
      <div className="w-full h-12 shadow">
        <div className="w-5/6 mx-auto h-12 flex flex-row justify-start items-center text-sm">
          {/* Weather and date here */}
          <div className="flex flex-row justify-around items-center w-1/3">
          <span>
            <FontAwesomeIcon icon={faCloudSunRain}></FontAwesomeIcon> &nbsp;
            15<sup>o</sup> Abuja, Nigeria
          </span>
          <span>
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> &nbsp;
            Monday, 14<sup>th</sup> June, 2021
          </span>
          </div>

          {/* Breaking News */}
          <div className="flex flex-row justify-start items-stretch h-full w-3/6">
            <p className="pl-2 shadow-sm flex flex-row justify-start items-center h-full bg-red-500 w-1/6">Breaking</p>
            <p className="pl-2 flex flex-row justify-start items-center h-full w-5/6">lorem See mE here</p>
          </div>

          {/* social media */}
          <div className="flex flex-row justify-center items-center h-full w-1/6 text-right">
            <FontAwesomeIcon className="py-1 text-2xl" icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon className="py-1 text-2xl" icon={faTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon className="py-1 text-2xl" icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon className="py-1 text-2xl" icon={faYoutube}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
