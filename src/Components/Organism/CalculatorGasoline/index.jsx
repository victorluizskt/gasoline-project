import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { calculateTotal } from './helper';
import { CardContainer, Form } from './styles';

function CalculatorGasoline() {
  const[kilometerLiter, setKilometerLiter] = useState();
  const[priceGasoline, setPriceGasoline] = useState();
  const[totalRoad, setTotalRoad] = useState();
  const[total, setTotal] = useState();

  useEffect(() => {}, [total])

  console.log(total);

  return (
    <CardContainer>
      <Form>
        <TextField 
          id="outlined-basic" 
          label="Kilometer/Liter" 
          styles={{marginTop: '20px'}}
          variant="outlined"
          value={kilometerLiter}
          onChange={(event) => setKilometerLiter(event.target.value)}
        />
        <TextField 
          id="outlined-basic" 
          label="Price Gasoline" 
          variant="outlined" 
          value={priceGasoline}
          onChange={(event) => setPriceGasoline(event.target.value)}
        />
        <TextField 
          id="outlined-basic" 
          label="Total road" 
          variant="outlined" 
          value={totalRoad}
          onChange={(event) => setTotalRoad(event.target.value)}
        />

        <TextField 
          id="standard-basic" 
          label="Result" 
          disabled
          value={`R$ ${total.toFixed(2)}` || 0}
        />
        <Button 
          variant="contained"
          disabled={!kilometerLiter || !priceGasoline || !totalRoad}
          size="small"
          onClick={() => setTotal(calculateTotal(kilometerLiter, priceGasoline, totalRoad))}
        >
          Calculate
        </Button>
      </Form>
    </CardContainer>
  );
}

export default CalculatorGasoline;
