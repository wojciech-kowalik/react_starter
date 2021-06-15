import React, { useEffect } from 'react'

import { Grid, Box, Typography } from '@material-ui/core'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    top: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.background.paper,
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    title: {
      width: 768,
    },
  })
)

type Props = {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Box
        className={classes.top}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box className={classes.title}>
          <Typography>Lorem ipsum</Typography>
        </Box>
      </Box>
      <Grid container justify="center">
        {children}
      </Grid>
    </>
  )
}

export { Container }
