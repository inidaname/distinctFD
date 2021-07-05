import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";


function Top(): ReactElement {

  // @TODO: Use redux MAYBE to animate headlines

  const {isPending, error, data: news} = useFetch(`https://newsapi.org/v2/top-headlines?country=ng&category=business&pageSize=5&apiKey=9599b201ce454089997cb56cb39c4952`);
  const [para, setPara]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);
  let num = 5
  useEffect(() => {
      setInterval(function (){
          setPara(newP =>  (newP <= (num - 1)) ? newP + 1 : 0)
      }, 5000)
  }, [num])

  return (
  <div className="w-full h-12 shadow mb-5">
    <div className="w-5/6 mx-auto h-12 flex flex-row justify-start items-center text-sm">
      {/* Weather and date here */}
      <div className="flex flex-row justify-around items-center w-1/3">
        <span>
          <FontAwesomeIcon icon={['fas', 'cloud-sun-rain']}></FontAwesomeIcon> &nbsp;
          15<sup>o</sup> Abuja, Nigeria
        </span>
        <span>
          <FontAwesomeIcon icon={['fas', 'clock']}></FontAwesomeIcon> &nbsp;
          Monday, 14<sup>th</sup> June, 2021
        </span>
      </div>

      {/* Breaking News */}
      <div className="flex flex-row justify-start items-stretch h-full w-3/6">
        <p className="pl-2 shadow-sm flex flex-row justify-start items-center h-full bg-red-500 text-white w-1/5">Headlines</p>
          {isPending && <p className="pl-2 flex flex-row justify-start items-center h-full w-5/6">Headlines loading</p>}
          {error && <p className="pl-2 flex flex-row justify-start items-center h-full w-5/6">{error}</p>}
          {news && news.map((article, index)=> {
            return <p key={index} className={(para === index) ? `pl-2 inline-block w-5/6 h-full leading-3 items-center py-2` : `hidden`}>{article.title}</p>
          })}

      </div>

      {/* social media */}
      <div className="flex flex-row justify-center items-center h-full w-1/6 text-right">
        <FontAwesomeIcon className="py-1 text-2xl" icon={['fab', 'facebook']}></FontAwesomeIcon>
        <FontAwesomeIcon className="py-1 text-2xl" icon={['fab', 'twitter']}></FontAwesomeIcon>
        <FontAwesomeIcon className="py-1 text-2xl" icon={['fab', 'instagram']}></FontAwesomeIcon>
        <FontAwesomeIcon className="py-1 text-2xl" icon={['fab', 'youtube']}></FontAwesomeIcon>
      </div>
    </div>
  </div>
  )
}

export default Top