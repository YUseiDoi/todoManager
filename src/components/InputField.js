import React from 'react';

import { StatusGood } from 'grommet-icons';
import { Box, Button, Grommet, Form, FormField, TextInput } from 'grommet';
import { grommet } from 'grommet/themes';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modalTitle: {
        fontSize: '30px',
        marginTop: 0,
    },
  }));


const ValidateOnBlur = ({setOpen}) => {
    const classes = useStyles();

    return (
        <Grommet full theme={grommet}>
            <Box fill align="center" justify="center">
                <p className={classes.modalTitle}>Add New Task</p>
                <Box width="medium">
                    <Form
                        validate="blur"
                        onReset={event => console.log(event)}
                        onSubmit={({ value }) => console.log('Submit', value)}
                    >
                        <FormField
                            label="Title"
                            name="title"
                            required
                            validate={[
                                { regexp: /^[a-z]/i },
                                name => {
                                    if (name && name.length === 1) return 'must be >1 character';
                                    return undefined;
                                },
                                name => {
                                    if (name === 'good')
                                        return {
                                            message: (
                                                <Box align="end">
                                                    <StatusGood />
                                                </Box>
                                            ),
                                            status: 'info',
                                        };
                                    return undefined;
                                },
                            ]}
                        />

                        <FormField label="Detail" name="detail" required>
                            <TextInput name="detail" type="detail" />
                        </FormField>

                        <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                            <Button label="Cancel" onClick={() => setOpen(false)} />
                            <Button type="reset" label="Reset" />
                            <Button type="submit" label="Update" primary />
                        </Box>
                    </Form>
                </Box>
            </Box>
        </Grommet>
    )
};

ValidateOnBlur.story = {
  name: 'Validate on blur',
};

export default ValidateOnBlur;