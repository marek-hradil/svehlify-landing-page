/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import { WithStyles, createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

const styles = (theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

interface IProps extends WithStyles<typeof styles> {}
interface IState {
  open?: boolean
}

class Index extends React.Component<IProps, IState> {
  public state = {
    open: false,
  }

  public handleClose = () => {
    this.setState({ open: false })
  }

  public handleClick = () => {
    this.setState({ open: true })
  }

  public render() {
    const { classes } = this.props
    const { open } = this.state

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color='primary' onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant='h4' gutterBottom={true}>
          Material-UI
        </Typography>
        <Typography variant='subtitle1' gutterBottom={true}>
          example project
        </Typography>
        <Typography gutterBottom={true}>
          <Link href='/about'>
            <a>Go to the about page</a>
          </Link>
        </Typography>
        <Button variant='contained' color='secondary' onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(Index)
