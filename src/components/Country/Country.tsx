import React from "react";
import {useParams} from "react-router-dom";
import {useGetCountryQuery} from "../../redux";
import {Loader} from "../Loader/Loader.tsx";

export const Country: React.FC = () => {
  const {name} = useParams()
  const {data = [], isLoading} = useGetCountryQuery(name)

  return <>
    {isLoading ? <Loader/> :
      <div>
        <h1>{data[0].name.official}</h1>
        <p>Population: {data[0].population}</p>
        <img src={data[0].flags.svg} alt={data[0].flags.alt}/>
        <div>
          <a href={data[0].maps.googleMaps}>Link google maps</a>
        </div>
        <p>Region: {data[0].region}</p>
      </div>
    }


  </>
}