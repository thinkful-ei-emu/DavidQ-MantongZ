import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

describe('<List />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        const list ={
            id: '1',
            header: 'First list',
            cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
          };
        ReactDOM.render(<List key= {list.id} title={list.header} cards={list.cardIds.map(id => store.allCards[id])} />), div);
           
        // List
        // key={list.id}
        // header={list.header}
        // cards={list.cardIds.map(id => store.allCards[id])}

        ReactDOM.unmountComponentAtNode(div);
    });
});
