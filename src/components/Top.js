import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopHeader from './TopHeader';
import Rate from './Rate';

const useStyles = makeStyles({
    root: {
      backgroundColor: 'green'
    },
  });

const Top = () => {
    const classes = useStyles();

    return (
        <>
        <TopHeader />
        <Rate className={classes.root} />
        </>
    );
}

export default Top;

