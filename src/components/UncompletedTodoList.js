import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import IconLabel from './AddButton';

const useStyles = makeStyles({
  root: {
    margin: '0 0 0 0',
    width: '100%'
  },
  list: {
    marginTop: '20px',
    height: '70px',
  },
  nested: {
    height: 'auto',
  },
    root2: {
      //backgroundColor: 'green',
      width: '100%',
    },
    title: {
      backgroundColor: '#7D4CDB',
      margin: '0 15% 0 15%',
      lineHeight: '80px',
      borderRadius: '10px 10px 10px 10px',
      fontSize: '60px',
      textAlign: 'center',
      color: 'white',
    },
    container: {
      minHeight: '700px',
      margin: '0 15% 0 15%',
      //backgroundColor: '#F6E7FB',
    },
    add: {
      margin: '5rem 25% 0 25%',
      lineHeight: '70px',
      //backgroundColor: '#F6E7FB',
      textAlign: 'center',
      border: '2px solid #7D4CDB',
      borderRadius: '10px 10px 10px 10px',
      fontSize: '30px',
    },
  });

const UncompletedTodoList = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    const task = [
      {date: 20210105, title: "english", detail: "I have to study English for the entrance exam."}
    ]

    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <>
        <div className={classes.root2}>
          <div className={classes.title}>Today's Tasks</div>
          <div className={classes.container}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.root}
            >
              <ListItem button onClick={handleClick} className={classes.list}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </div>
          <IconLabel />
        </div>
      </>
    );
}

export default UncompletedTodoList;