import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import store from './STORE';

const list ={
            id: '1',
            header: 'First list',
            cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
          };

describe('<List />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        
    ReactDOM.render((<List key= {list.id} title={list.header} cards={list.cardIds.map(id => store.allCards[id])} />), div);
           
        // List
        // key={list.id}
        // header={list.header}
        // cards={list.cardIds.map(id => store.allCards[id])}

        ReactDOM.unmountComponentAtNode(div);
    });
    it('renderers the UI as expected',()=>{
      const tree = renderer.create((<List key= {list.id} title={list.header} cards={list.cardIds.map(id => store.allCards[id])} />)).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
