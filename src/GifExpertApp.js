import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {
    const [catergories, setCategories] = useState(['One Punch']);

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        

        <ol>
            {
                catergories.map( category => 
                    <GifGrid
                        key={category}
                        category={category}/>)
            }
        </ol>
        </>
    )
};
