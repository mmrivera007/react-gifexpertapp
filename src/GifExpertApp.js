import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categorias = ['Desarrollo', 'Infraestructura', 'Soporte'];
    const [categorias, setCategorias] = useState(['Desarrollo']);

    /* const handleAdd = () =>{
        //setCategorias([...categorias, 'Planificación']);
        setCategorias( categoria => [...categorias, 'Planificación']);
    } */

    return(
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategorias = {setCategorias} />

            <hr/>
            
            <ol>
                {
                    categorias.map( categoria => (
                        <GifGrid key={categoria} categoria = {categoria}/>
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;