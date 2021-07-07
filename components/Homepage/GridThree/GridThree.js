import { Grid } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGridThree from './SingleGridThree';

const GridThree = () => {
    const [gridDatas, setGridDatas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/grid3')
        .then(res => res.json())
        .then(data => setGridDatas(data))
    },[])
    return (
        <div>
           <Grid  container spacing={3}>
                {
                   gridDatas.map(gridData => <SingleGridThree key={gridData._id} gridData={gridData}></SingleGridThree>) 
                }
            </Grid>
        </div>
    );
};

export default GridThree;