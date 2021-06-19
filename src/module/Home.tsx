import Lead from "../components/main/Lead";
import SideBar from "../components/main/SideBar";
import useFetch from "../hooks/useFetch";

function Home(): JSX.Element {

  const {isPending, error, data} = useFetch();

  return (
    <main className="w-full flex flex-col justify-start items-start">
      <section className="w-full">
        <Lead page="Save" data={data} isPending={isPending} error={error}></Lead>
        <div className="h-md w-5/6 mx-auto flex flex-row justify-between mt-10 items-start">
          <div className="h-full grid grid-cols-3 grid-rows-7 w-4/6">
            <h4 className="col-span-3 row-span-1 border-b border-black">Say</h4>
            <div className="col-span-2 w-5/6 h-full row-span-6 p-3 border border-black flex flex-col">
              <img src={data && data[4].download_url} className="h-26" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla doloribus error est voluptas facere commodi tenetur neque esse! Architecto earum ipsa aperiam odit possimus dolorem nesciunt sint asperiores quae.</p>
            </div>
            <div>
              Second
            </div>
            <div>
              Third
            </div>
            <div>
              Forth
            </div>
            <div>
              Fifth
            </div>
            <div>
              Sixth
            </div>
            <div>
              Seventh
            </div>
          </div>
          <SideBar></SideBar>
        </div>
      </section>
      Home Show
    </main>
  );
}

export default Home;
