import React from 'react';

import { Calendar, Box, Text, Grommet } from 'grommet';
import { Plan } from 'grommet-icons';
import { ThemeType } from 'grommet/themes';

// Remove ': ThemeType' if you are not using Typescript.
const customTheme = {
  global: {
    font: {
      family: `-apple-system,
       BlinkMacSystemFont,
       "Segoe UI"`,
    },
  },
  calendar: {
    day: {
      extend: ({ isSelected }) => `
        border-radius: 100px;
        background-color: ${isSelected ? '#7D4CDB' : undefined}`,
    },
  },
};

const CustomDateCalendar = () => (
  <Grommet theme={customTheme} themeMode="dark">
    <Box align="center" background="white" gap="small">
      <Box
        direction="row"
        justify="center"
        align="center"
        gap="small"
        pad="small"
      >
        <Plan size="medium" />
        <Text size="xlarge" margin="none">
          Calendar
        </Text>
      </Box>
      <Calendar
        // date={new Date().toISOString()}
        date="2020-07-28T06:00:01.409Z"
        daysOfWeek
        firstDayOfWeek={1}
      />
    </Box>
  </Grommet>
);

CustomDateCalendar.story = {
  name: 'Custom date',
};

export default CustomDateCalendar;