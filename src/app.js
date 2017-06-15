import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import KanbanBoard from './KanbanBoard';

let cardList = [
  {
    id: 1,
    title: 'Read yooooooooo the book',
    description: 'I should read the whole book',
    status: 'in-progress',
    tasks: []
  },
  {
    id: 2,
    title: 'Write some code',
    description: 'Code along with the samples in the book',
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