import React,{useState} from 'react'
import {Input,Fab,} from '@material-ui/core'
import {Add} from '@material-ui/icons'
const Form = ({fn,list}) =>{
    const [name,setName]=useState('');
    const [title,setTitle]=useState('');
    const [comment,setComment]=useState('');

    const updateMe = (el) =>{
        const input = el.target.name;
        const value = el.target.value;
        input === 'name' ? setName(value):
        input === 'title' ? setTitle(value):
        setComment(value);
    }

    const clearMe = () => {

    }

    return(
        <form onSubmit={
            (here)=>{
            fn([...list,{
                name,
                title,
                comment
            }])
            here.preventDefault();
            const txt = document.querySelectorAll('form div input')
            const area = document.querySelector('form div textarea')
            txt.forEach(el => el.value = '')
            area.value=''
            }}>
            <Input
                placeholder='Name'
                name='name'
                onChange={updateMe}
            />
            <Input
                name='title'
                placeholder='Title'
                onChange={updateMe}
            />
            <Input
                name='comments'
                placeholder='Comments'
                multiline
                rows='3'
                onChange={updateMe}
            />
            <Fab color='primary' type='submit'>
                <Add/>
            </Fab>
        </form>
        
    );
};
export default Form;
