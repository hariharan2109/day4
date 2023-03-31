import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Autocomplete } from '@mui/material';


const fruitOptions = ['Apple', 'Banana', 'Cherry'];

function GreetingForm() {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');

  const handleSubmit = (event) => {
    alert(`Hello, ${name}! Your favorite fruit is ${fruit}.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        data-testid="name"
      />
      <Autocomplete
        options={fruitOptions}
        value={fruit}
        onChange={(event, value) => setFruit(value)}
        renderInput={(params) => (
          <TextField {...params} label="Choose a fruit" data-testid="autocomplete" />
        )}
      />
      <Button variant="contained" color="success" type="submit" data-testid="button">
        Submit
      </Button>
    </form>
  );
}

export default GreetingForm;