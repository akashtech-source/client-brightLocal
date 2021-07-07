import { Grid } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGridFive from './SingleGridFive';

const GridThree = () => {
    const [gridDatas, setGridDatas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/grid5')
        .then(res => res.json())
        .then(data => setGridDatas(data))
    },[])
    return (
        <div>
           <Grid  container spacing={3}>
                {
                   gridDatas.map(gridData => <SingleGridFive key={gridData._id} gridData={gridData}></SingleGridFive>) 
                }
            </Grid>
        </div>
    );
};

export default GridThree;