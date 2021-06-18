import useFetch from "../../hooks/useFetch"

function Lead({page}: {page: string}): JSX.Element {
  const {error, data} = useFetch(`https://picsum.photos/v2/list?page=1&limit=20`)
  
  function getRandom(): {url: string, author: string} {
    let random: number = 0
    if (data) {
      random = Math.floor(Math.random() * data.length);
      return (data) ? {url: data[random].download_url, author: data[random].author} : {url: '', author: ''};
    }
    return {url: '', author: ''}
  }


  return (
    <section className="h-96 mx-auto gap-2 grid-rows-2 grid-cols-5 grid w-5/6">
      <div className="relative row-span-3 col-span-3">
        <div className="absolute text-white flex flex-col justify-end p-6 z-20 h-full w-full bg-opacity-40 bg-black top-0 left-0">
          <h3 className="font-bold">{getRandom().author}</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi quidem voluptatem et, aspernatur optio nesciunt obcaecati mollitia autem
          </p>
        </div>
        <img src={getRandom().url} className=" z-10 absolute top-0 left-0 w-full h-full" alt="" />
      </div>
      <div className="relative">
        <div className="absolute text-white flex flex-col justify-end p-6 z-20 h-full w-full bg-opacity-40 bg-black top-0 left-0">
          <h3 className="font-bold">{getRandom().author}</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur
            </p>
        </div>
        <img src={getRandom().url} className=" z-10 absolute top-0 left-0 w-full h-full" alt="" />
      </div>
      <div className="relative">
        <div className="absolute text-white flex flex-col justify-end p-6 z-20 h-full w-full bg-opacity-40 bg-black top-0 left-0">
          <h3 className="font-bold">{getRandom().author}</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur
            </p>
        </div>
        <img src={getRandom().url} className="z-10 absolute top-0 left-0 w-full h-full" alt="" />
      </div>
      <div className="relative row-span-2 col-span-2">
        <div className="absolute text-white flex flex-col justify-end p-6 z-20 h-full w-full bg-opacity-40 bg-black top-0 left-0">
          <h3 className="font-bold">{getRandom().author}</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur
            </p>
        </div>
        <img src={`${getRandom().url}/?grayscale&blur=2`} className=" z-10 absolute top-0 left-0 w-full h-full" alt="" />
      </div>
    </section>
  )
}

export default Lead