import Top from './header/Top';

function Header(): JSX.Element {
  return (
    <header className="w-full h-56 flex flex-col justify-between items-start">
      <Top></Top>
    </header>
  );
}

export default Header;
