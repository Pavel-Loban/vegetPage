import { Grid } from '@mui/material'
import { display } from '@mui/system'
import React from 'react'
import ContentLoader from 'react-content-loader'

const SceletonCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{display:'flex',
    justifyContent: 'center', marginTop: '-8px'}} >
       <ContentLoader
    speed={2}
    width={300}
    height={323}
    viewBox="0 0 300 323"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="9" rx="8" ry="8" width="300" height="200" />
    <rect x="0" y="231" rx="0" ry="0" width="100" height="24" />
    <rect x="235" y="231" rx="41" ry="41" width="28" height="26" />
    <rect x="0" y="264" rx="5" ry="5" width="65" height="19" />
    <rect x="25" y="293" rx="5" ry="5" width="30" height="25" />
    <rect x="95" y="293" rx="5" ry="5" width="30" height="25" />
    <rect x="70" y="293" rx="5" ry="5" width="15" height="25" />
    <rect x="219" y="293" rx="10" ry="10" width="55" height="28" />
  </ContentLoader>
      </Grid>
  )
}

export default SceletonCard
