import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, ReactElement } from "react";

const Footer: FunctionComponent = (): ReactElement => {
  return (
    <footer className="w-full h-60 flex flex-col py-5 justify-around bg-gradient-to-t from-gray-700 via-gray-700 to-gray-700">
      <div className="flex flex-row justify-center items-center h-full mx-auto w-5/6">
        <section className="flex flex-col justify-start items-start p-4 w-1/3 mx-2 h-full">
          <img src="" className="h-16 w-full" alt="" />
          <p className="text-sm text-white font-light p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            quidem architecto fugiat doloribus soluta dolore
          </p>
          <div className="flex flex-row justify-center items-center h-full w-full text-right">
            <FontAwesomeIcon
              className="py-1 text-2xl"
              icon={["fab", "facebook"]}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="py-1 text-2xl"
              icon={["fab", "twitter"]}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="py-1 text-2xl"
              icon={["fab", "instagram"]}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="py-1 text-2xl"
              icon={["fab", "youtube"]}
            ></FontAwesomeIcon>
          </div>
        </section>
        <section className="flex flex-col justify-start items-start p-4 w-1/3 mx-2 h-full">
          <h5 className="mb-4">Tags</h5>
          <hr className="w-full" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illo officia aspernatur debitis doloribus! Quis, quos? </p>
        </section>
        <section className="flex flex-col justify-start items-start p-4 w-1/3 mx-2 h-full">
          <h5 className="mb-4">Contact Us Through</h5>
          <hr className="w-full" />
        </section>
      </div>
    </footer>
  );
}

export default Footer;
