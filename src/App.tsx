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
    return {
      sheetSize: '',
      cardPlacement: '',
      cardPlacementInSheet: '',
      currentSheetNumber: '',
      lastIndexOnSheet: '',
      onBack: false,
      pageMap: {__html: ''}
    };
  });

  useEffect(() => {
    localStorage.setItem('cardInputs', JSON.stringify(cardInputs));
    setCardSorted(cardSort(cardInputs));
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
      {SheetComponent({cardInputs: cardInputs, cardSorted: cardSorted})}
      <div className='m-3 p-4 thin-border'>
        <span className="text-lg font-bold">Page Number:</span> {cardSorted.currentSheetNumber}<br />
        <span className="text-lg font-bold">Card Placement in Sheet:</span> {cardSorted.cardPlacementInSheet}<br />
        <span className="text-lg font-bold">Back Sheet:</span> {cardSorted.onBack ? 'yes' : 'no'}<br />
        <div dangerouslySetInnerHTML={cardSorted.pageMap}></div>
      </div>
    </div>
  );
}

export default App;
