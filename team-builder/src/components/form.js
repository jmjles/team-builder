import React from 'react'
import {Input,Fab,} from '@material-ui/core'
import {Add} from '@material-ui/icons'
const Form = ({fn}) =>{
    console.log(fn)
    return(
        <form>
            <Input
                placeholder='Name'
            />
            <Input
                placeholder='Title'
            />
            <Input
                placeholder='Comments'
                multiline
                rows='3'
            />
            <Fab color='primary'>
                <Add/>
            </Fab>
        </form>
        
    );
};
export default Form;
