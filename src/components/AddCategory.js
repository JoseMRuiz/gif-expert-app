import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {
    const[inputValue,setInputValue] = useState('   ')

    const handleinputchangue = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

    if ( inputValue.trim().length > 2) {
        setCategories(cats => [inputValue,...cats]);
        setInputValue( '' );
        
    }
        

    }


    return (
        <>

        <div>
            <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={ inputValue }
            onChange={handleinputchangue}
            />
            </form>
            
        </div>

        </>
    )
}

export default AddCategory
