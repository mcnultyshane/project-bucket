import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import Map from '../../components/Map'
import mapImg from '../../images/bucketmap.png'
export default function Home () {
    return(
    <>
    <Card>
        <Map />
        {/* <CardContent>
            <CardMedia component="img" height='600' image={mapImg}>

            </CardMedia>
        </CardContent> */}
    </Card>
    </>
    )}