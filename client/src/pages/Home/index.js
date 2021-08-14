import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import Map from '../../components/Map'
import mapImg from '../../images/bucketmap.png'
import { QUERY_ME } from '../../utils/queries';
export default function Home () {
    const { data } = useQuery(QUERY_ME);
    const user = data?.user || []

    return(
    <>
    <Card>
        <Map user={user}/>
        {/* <CardContent>
            <CardMedia component="img" height='600' image={mapImg}>

            </CardMedia>
        </CardContent> */}
    </Card>
    </>
    )}