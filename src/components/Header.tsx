import { FunctionComponent, ReactElement } from "react";
import { Top, Nav } from "components/header";

const Header: FunctionComponent = (): ReactElement => {
  return (
    <header className="w-full h-auto flex flex-col justify-start items-start">
      <Top></Top>
      {/* ads section */}
      {/* TODO: use ads as both horizontal and vertical display */}
      <section className="h-36 border-black border w-5/6 mx-auto flex flex-row justify-between items-center">
        {/* Logo section */}
        <div className="w-1/5 ml-7 border border-black">
          <h1 className="hidden">Distinct News</h1>
          <img src="" className="w-full" alt="Logo" />
        </div>

        {/* Page ads */}
        <div className="bg-gradient-to-l from-blue-500 via-blue-300 to-blue-200 self-stretch w-2/3"></div>
      </section>

      {/* Navigation */}
      <Nav></Nav>
    </header>
  );
};

export default Header;
