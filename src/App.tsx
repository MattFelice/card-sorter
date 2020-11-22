//import logo from './logo.svg';
import React from 'react';
import './assets/main.css';
import { TextInputComponent } from './components/text-input-component';
import cardSort from './functions/card-sort';
import { CardSortInterface } from './interfaces/card-sort-interface';

function App() {
  let cardNumberState = React.useState('');
  let cardCopiesState = React.useState('');
  let sheetRowsState = React.useState('');
  let sheetColumnsState = React.useState('');

  let cardSortState = React.useState<CardSortInterface>({
    cardPlacement: 1,
    sheetSize: 1, 
    currentSheetNumber: 1, 
    lastIndexOnSheet: 1,
    cardPlacementInSheet: 1
  });

  React.useEffect(() => {
    cardSortState[1](cardSort(cardNumberState[0], [sheetColumnsState[0], sheetRowsState[0]], cardCopiesState[0]));
  }, cardNumberState);

  return (
    <div className="App container mx-auto">

      <TextInputComponent
        showBorder={true} 
        labelProps={{text: 'Card Number'}}
        inputProps={{placeholder: '1', value: cardNumberState}} />

      <TextInputComponent
        showBorder={true} 
        labelProps={{text: 'Card Spacing (or number of copies)'}}
        inputProps={{placeholder: '1', value: cardCopiesState}}  />

      <div className="flex">
        <div className="flex-1">
          <TextInputComponent
            showBorder={true} 
            labelProps={{text: 'Sheet Rows'}}
            inputProps={{placeholder: '1', value: sheetRowsState}}  />
        </div>

        <div className="flex-1">
          <TextInputComponent
            showBorder={true} 
            labelProps={{text: 'Sheet Columns'}}
            inputProps={{placeholder: '1', value: sheetColumnsState}}  />
        </div>
      </div>

      Page number is {cardSortState[0].currentSheetNumber}<br />
      Placement in sheet is {cardSortState[0].cardPlacementInSheet}
    </div>
  );
}

export default App;
