import { Grid } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGridTwo from './SingleGridTwo';

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
                   gridDatas.map(gridData => <SingleGridTwo key={gridData._id} gridData={gridData}></SingleGridTwo>) 
                }
            </Grid>
        </div>
    );
};

export default GridOne;