import React, { useState } from 'react'
import  AddCategory  from '../components/AddCategory'
import GifGrid from './GifGrid';

export const GifExpertApp = () => {
    
    const [categories,setCategories] = useState (['']);

    const handleadd = () => {
        
        setCategories([...categories , ' '])
    }


    return (


        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />


            {/* <button onClick={ handleadd } >  agregar categoria  </button> */}

            <ol>
                { 
                    categories.map( (category, ix) => 

                        <GifGrid
                        key={ category }
                        category={ category } />
                        
                    )
                }
            </ol>






        </>
    )
}

