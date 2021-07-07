import { Grid } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGridFour from './SingleGridFour';

const GridOne = () => {
    const [gridDatas, setGridDatas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/grid2')
        .then(res => res.json())
        .then(data => setGridDatas(data))
    },[])
    return (
        <div>
           <Grid  container spacing={3}>
                {
                   gridDatas.map(gridData => <SingleGridFour key={gridData._id} gridData={gridData}></SingleGridFour>) 
                }
            </Grid>
        </div>
    );
};

export default GridOne;