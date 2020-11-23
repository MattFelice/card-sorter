//import logo from './logo.svg';
import React, { createRef, useEffect, useState } from 'react';
import './assets/main.css';
import { SheetComponent } from './components/sheet-component';
import { TextInputComponent } from './components/text-input-component';
import cardSort from './functions/card-sort';
import { CardInputInterface } from './interfaces/card-input-interface';
import { CardSortInterface } from './interfaces/card-sort-interface';

function App() {

  const [cardInputs, setCardInputs] = useState((): CardInputInterface => {
    const localCardInputs = localStorage.getItem('cardInputs');

    if(localCardInputs) return JSON.parse(localCardInputs) as CardInputInterface;

    return {
      cardNumber: '',
      cardSpacing: '',
      sheetRows: '',
      sheetColumns: ''
    };
  });

  const [cardSorted, setCardSorted] = useState((): CardSortInterface => {
    const localCardInputs = localStorage.getItem('cardSort');

    if(localCardInputs) return JSON.parse(localCardInputs) as CardSortInterface;

    return {
      sheetSize: '',
      cardPlacement: '',
      cardPlacementInSheet: '',
      currentSheetNumber: '',
      lastIndexOnSheet: ''
    };
  });

  useEffect(() => {
    localStorage.setItem('cardInputs', JSON.stringify(cardInputs));
    setCardSorted(cardSort(cardInputs));
    localStorage.setItem('cardSort', JSON.stringify(cardSorted));
  }, [cardInputs]);

  return (
    <div className="App container mx-auto">

      <TextInputComponent
        showBorder={true} 
        labelProps={{text: 'Card Number'}}
        inputProps={{
          placeholder: '1', 
          useState: [cardInputs, setCardInputs], 
          modelKey: 'cardNumber', 
          value: cardInputs.cardNumber 
        }}
      />

      <TextInputComponent
        showBorder={true} 
        labelProps={{text: 'Card Spacing (or number of copies between cards)'}}
        inputProps={{
          placeholder: '1', 
          useState: [cardInputs, setCardInputs], 
          modelKey: 'cardSpacing', 
          value: cardInputs.cardSpacing
        }}
      />

      <div className='flex'>
        <div className='flex-1'>
          <TextInputComponent
            showBorder={true} 
            labelProps={{text: 'Sheet Rows'}}
            inputProps={{
              placeholder: '1', 
              useState: [cardInputs, setCardInputs], 
              modelKey: 'sheetRows', 
              value: cardInputs.sheetRows
            }}
          />
        </div>
        <div className='flex-1'>
          <TextInputComponent
            showBorder={true} 
            labelProps={{text: 'Sheet Columns'}}
            inputProps={{
              placeholder: '1', 
              useState: [cardInputs, setCardInputs], 
              modelKey: 'sheetColumns', 
              value: cardInputs.sheetColumns
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
