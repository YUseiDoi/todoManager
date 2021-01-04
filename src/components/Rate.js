import React from 'react';

import { Grommet, Box, Meter, Stack, Text } from 'grommet';
import { grommet } from 'grommet/themes';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      fontSize: '30px',
      marginLeft: '40%',
      marginTop: '40px',
      marginBottom: '0px',
    },
    rate: {
        marginTop: '200px',
    },
  });

const Rate = () => {
  const meterValue = 50;
  const classes = useStyles();

  return (
    <Grommet theme={grommet} className={classes.rate}>
        <p className={classes.root}>achievement rate</p>
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
  );
};

export default Rate;
