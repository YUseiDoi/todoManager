import React from 'react';

import { Grommet, Box, Meter, Stack, Text } from 'grommet';
import { grommet } from 'grommet/themes';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      fontSize: '45px',
      marginTop: '40px',
      marginBottom: '1rem',
      textAlign: 'center',
      lineHeight: '60px',
      borderRadius: '10px 10px 10px 10px',
      backgroundColor: '#F6E7FB',
    },
    rate: {
        width: '400px',
    },
    text: {
        color: '#444444',
    },
    container: {
        width: '400px',
        textAlign: 'center',
        margin: '10rem 0 0 auto',
        marginRight: '10rem',
    }
  });

const Rate = () => {
  const meterValue = 50;
  const classes = useStyles();

  return (
      <div className={classes.container}>
        <div className={classes.root}>
            <p className={classes.text}>Achievement Rate</p>
        </div>
    <Grommet theme={grommet} className={classes.rate}>
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[{ value: meterValue }]}
            size="300px"
            thickness="medium"
          />
          <Box direction="row" align="center" pad={{ bottom: 'medium' }}>
            <Text size="xxlarge" weight="bold">
              {meterValue}
            </Text>
            <Text size="medium">%</Text>
          </Box>
        </Stack>
      </Box>
    </Grommet>
    </div>
  );
};

export default Rate;
