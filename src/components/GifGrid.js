//import React,{useEffect, useState} from 'react';
import React from 'react';
import { useFecthGifs } from '../hooks/useFecthGifs';
//import getGifs from '../helpers/getGifs';
import GifGridItem from './GifGridItem';


export const GifGrid = ({categoria}) => {

/*     const [images, setImages] = useState([]);
    //En clases es el metodo componentDiddunMount
    useEffect( () => {
        getGifs( categoria ).then(setImages);
    },[categoria]); */
    const {data:images, loading} = useFecthGifs( categoria );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}

{            <div className="card-grid">
                {
                    images.map( img =>(
                        <GifGridItem key={img.id} {...img}/>
                    ))
                }
            </div>      }  
        </>
    )
}
