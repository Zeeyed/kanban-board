import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import KanbanBoard from './KanbanBoard';

let cardList = [
  {
    id: 1,
    title: 'Read the book',
    description: 'I should read the **whole** book',
    color: '#BD8D31',
    status: 'in-progress',
    tasks: []
  },
  {
    id: 2,
    title: 'Write some code',
    description: `Code along with the samples in the book.
     The complete source can be found at [github](http://github.com)`,
    color: '#3A7E28',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name:'Contact List',
        done: true
      },
      {
        id: 2,
        name:'Kanban Example',
        done: false
      },
      {
        id: 3,
        name:'My own experiments',
        done: false
      }
    ]
  },
];

ReactDOM.render(<KanbanBoard cards={cardList} />, document.getElementById('root'));  