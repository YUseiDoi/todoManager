import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      fontSize: '80px',
      marginLeft: '30%',
      marginTop: '40px',
      marginBottom: '0px',
    },
    root2: {
        fontSize: '50px',
        marginLeft: '60%',
        marginTop: '0px'
      },
  });

const TopHeader = () => {
    const classes = useStyles();
    return (
        <>
        <p className={classes.root}>Task Manager</p>
        <p className={classes.root2}>for perfect life</p>
        </>
    );
}

export default TopHeader;