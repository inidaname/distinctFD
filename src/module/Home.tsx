import Lead from "../components/main/Lead";
import SideBar from "../components/main/SideBar";
import useFetch from "../hooks/useFetch";

function Home(): JSX.Element {

  const {isPending, error, data} = useFetch(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=9599b201ce454089997cb56cb39c4952`);
  const topFive: any[] = (data) ? data?.slice(0,4) : [];
  const moreNews: any[] = (data) ? data.slice(5, 12) : [];
  console.log(moreNews)
  return (
    <main className="w-full flex flex-col justify-start items-start">
      <section className="w-full">
        <Lead page="Save" data={topFive} isPending={isPending} error={error}></Lead>
        <div className="h-md w-5/6 mx-auto flex flex-row justify-between mt-10 items-start">
          <div className="h-full grid grid-cols-3 grid-rows-7 w-4/6">
            <h4 className="col-span-3 row-span-1">Recent Hot News</h4>
            {moreNews.map((more, i) => {
              return <div className={(i === 0) ? "relative col-span-2 w-full h-full row-span-6 p-3 flex flex-col" : 'flex border border-thin border-red-300 flex-row justify-between items-center'}>
                <img src={more.urlToImage} className={(i === 0) ? 'h-26' : 'w-15 h-10 mx-2'} alt="" />
                {(i === 0) ? <h4 className="absolute mx-auto bg-opacity-60 py-5 w-5/6 bottom-32 left-5 bg-red-500 left-0 px-4 text-sm text-white font-bold">{more.title}</h4> : ''}
              <p className="text-sm px-4 py-1">{(i === 0) ? more.description : (more.title) ? `${more.title.substring(0, 44)} ...` : more.title}</p>
              </div>
            })}
          </div>
          <SideBar></SideBar>
        </div>
      </section>
    </main>
  );
}

export default Home;
