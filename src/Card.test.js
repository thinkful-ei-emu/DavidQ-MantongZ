import React from 'react';
import renderer from 'react-test-renderer';

import ReactDOM from 'react-dom';
import Card from './Card';

describe('<Card />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Card />, div);

        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders UI as Expected',()=>{
      const tree = renderer.create(<Card />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
