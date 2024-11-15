
import React, { useState } from 'react'

import { Button, FormControlLabel, TextField } from '@mui/material';

const Todo = () => {
    const [todo, setState] = useState(0)
  //  {...setState[e.target.name]:e.target.value}


    const updateTodo =()=>{
          
    }

    return (
        <>
            <Navbar />

            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" onClick={updateTodo}> </FormControlLabel>
            <TextField id="standard-basic" label="Standard" variant="standard" value="todo" />   <Button variant="outlined">Delete</Button>

            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" onClick={updateTodo} todotask={<TextField id="standard-basic" label="Standard" variant="standard" value= {req.body.todotask}/>} delete={<Button variant="outlined">Delete</Button>} />



  
        </>
    )
}

export default Todo