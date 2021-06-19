
function Lead({page, data, isPending, error}: {page: string, data: any[] | undefined, isPending: boolean, error: null }): JSX.Element {


  return (
    <section className="h-96 mx-auto gap-2 grid-rows-2 grid-cols-5 grid w-5/6">
      <div className="relative row-span-3 col-span-3">
        <div className="absolute text-white flex flex-col justify-end p-6 z-20 h-full w-full bg-opacity-40 bg-black top-0 left-0">
          {isPending && <h3 className="font-bold">Loading</h3>}
          <h3 className="font-bold">{data && data[0].author}</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <img src={data && data[0].download_url} className=" z-10 absolute top-0 left-0 w-full h-full" alt="" />
      </div>
      <div className="relative">
        <div className="absolute text-white flex flex-col justify-end p-6 z-20 h-full w-full bg-opacity-40 bg-black top-0 left-0">
          {isPending && <h3 className="font-bold">Loading</h3>}
          <h3 className="font-bold">{data && data[1].author}</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur
            </p>
        </div>
        <img src={data && data[1].download_url} className=" z-10 absolute top-0 left-0 w-full h-full" alt="" />
      </div>
      <div className="relative">
        <div className="absolute text-white flex flex-col justify-end p-6 z-20 h-full w-full bg-opacity-40 bg-black top-0 left-0">
          {isPending && <h3 className="font-bold">Loading</h3>}
          <h3 className="font-bold">{data && data[2].author}</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur
            </p>
        </div>
        <img src={data && data[2].download_url} className="z-10 absolute top-0 left-0 w-full h-full" alt="" />
      </div>
      <div className="relative row-span-2 col-span-2">
        <div className="absolute text-white flex flex-col justify-end p-6 z-20 h-full w-full bg-opacity-40 bg-black top-0 left-0">
          {isPending && <h3 className="font-bold">Loading</h3>}
          <h3 className="font-bold">{data && data[3].author}</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur
            </p>
        </div>
        <img src={`${data && data[3].download_url}/?grayscale&blur=2`} className=" z-10 absolute top-0 left-0 w-full h-full" alt="" />
      </div>
    </section>
  )
}

export default Lead