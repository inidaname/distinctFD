import { ReactElement } from "react";

const timeLaps = new Intl.RelativeTimeFormat(navigator.language, {
  style: "long",
  numeric: "always"
});

function Lead({page, data: topFive, isPending, error}: {page: string, data: any[], isPending: boolean, error: null }): ReactElement {

  return (
    <div className="w-5/6 mx-auto">
      <section className="h-96 mx-auto gap-2 grid-rows-2 grid-cols-5 grid w-full">
        {topFive.map((tops, i) => {
          let classPlace: string = '';
          if (i === 0) {
            classPlace = "row-span-3 col-span-3";
          }
          if (i === topFive.length - 1){
            classPlace = "row-span-2 col-span-2"
          }
          return <div key={i} className={`relative ${classPlace}`}>
            <div className="absolute text-white flex flex-col justify-end p-6 z-20 h-full w-full bg-opacity-40 bg-black top-0 left-0">
              {isPending && <h3 className="font-bold">Loading</h3>}
              <h3 className="font-bold">{(tops.author) ? tops.author : tops.source.name}</h3>
              <p className="text-sm">{tops.description} <br />{timeLaps.format(- new Date(tops.publishedAt).getHours(), 'hours')}</p>
            </div>
            <img src={tops.urlToImage} className="z-10 absolute top-0 left-0 w-full h-full" alt="" />
          </div>
        })}
      </section>
    </div>
  )
}

export default Lead