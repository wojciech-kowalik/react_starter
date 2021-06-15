import React, { useEffect, useState } from 'react'

import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import API from '@api'
import { DataType } from '@types'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: 500,
  },
  text: {
    margin: theme.spacing(4),
  },
}))

const Index: React.FC = () => {
  const classes = useStyles()
  const [name, setName] = useState('')

  useEffect(() => {
    API.defaultGet
      .fetchData()
      .then((data: DataType) => {
        setName(data.text)
      })
      .catch((e: Error) => {})
  }, [])

  return (
    <Grid item={true}>
      <div className={classes.root}>
        <div>
          <Typography className={classes.text} variant="h5">
            Hello {name}
          </Typography>
        </div>
      </div>
    </Grid>
  )
}
export default Index
