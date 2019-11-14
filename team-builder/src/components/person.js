import React from 'react';
import Card from './card';
import {Paper, Container} from '@material-ui/core';
const Person = ({list})  => {
    console.log(list)
    return(
        <Container>
            <Paper sm>
                {
                    list.map(({id,name,title,comment}) => (
                        <Card 
                            key={id}
                            name={name}
                            title={title}
                            comment={comment}
                        />
                    ))
                }
            </Paper>
        </Container>
        
    );
};

export default Person;