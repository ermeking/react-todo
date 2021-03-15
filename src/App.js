import React from 'react';
import listSvg from './assets/img/list.svg';
import List from './components/List/List';
import AddButtonList from './components/AddButtonList/AddButtonList';

import DB from './assets/db.json';

function App() {
  return (
    <div className='todo'>
      <div className='todo__sidebar'>
        <List items={
          [
            {
              icon: <img src={listSvg} />, 
              label: "Все задачи", 
            }
          ]} 
        />
      <List 
        items={
          [
            {
              color: 'green',
              label: 'Покупки'
            },
            {
              color: 'blue',
              label: 'Front-end',
              active: true
            },
            {
              color: 'pink',
              label: 'Фильмы и сериалы'
            },
          ]
        } 
        isRemovable 
      />
      <AddButtonList colors={DB.colors} />
      </div>
      <div className='todo__tasks'>

      </div>
    </div>
  );
}

export default App;