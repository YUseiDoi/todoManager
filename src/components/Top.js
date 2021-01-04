import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopHeader from './TopHeader';
import Rate from './Rate';
import UncompletedTodoList from './UncompletedTodoList';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
  });

const Top = () => {
    const classes = useStyles();

    return (
        <>
        <TopHeader />
        <div className={classes.root}>
        <UncompletedTodoList />
        <Rate />
        </div>
        </>
    );
}

export default Top;

