//import logo from './logo.svg';
import React from 'react';
import './assets/main.css';
import InputAtom from './atoms/input-atom';
import cardSort from './functions/card-sort';
import { CardSortInterface } from './interfaces/card-sort-interface';

function App() {
  let cardNumberState = React.useState('1');
  let cardCopiesState = React.useState('4');
  let sheetRowsState = React.useState('3');
  let sheetColumnsState = React.useState('3');

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
      <InputAtom placeholder="Card Number" value={cardNumberState} /><br />
      <InputAtom placeholder="Card Copies" value={cardCopiesState} /><br />
      <InputAtom placeholder="Sheet Rows" value={sheetRowsState} /><br />
      <InputAtom placeholder="Sheet Columns" value={sheetColumnsState} /><br />
      Page number is {cardSortState[0].currentSheetNumber}<br />
      Placement in sheet is {cardSortState[0].cardPlacementInSheet}
    </div>
  );
}

export default App;
