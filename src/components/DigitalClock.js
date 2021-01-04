import React from 'react';

import { Box, Grommet, Clock, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const override = {
  clock: {
    digital: {
      text: {
        customSize: {
          size: '50px',
          height: 1.234,
          marginTop: 0,
        },
      },
    },
  },
};

const theme = deepMerge(grommet, override);

const Digital = () => (
  <Grommet theme={theme}>
    <Box direction="row" gap="medium" pad="medium">
      <Box align="center">
        <Clock type="digital" size="customSize" />
      </Box>
    </Box>
  </Grommet>
);

Digital.story = {
  parameters: {
    chromatic: { disable: true },
  },
};

export default Digital;