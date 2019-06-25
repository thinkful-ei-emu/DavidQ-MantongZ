import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';
import renderer from 'react-test-renderer';


describe('<Participant />', () => {
    //smoke testing
    it ('render without crashing', ()=> {
        const div =document.createElement('div');
        ReactDOM.render(<Participant   
            id= {1}
            name= 'Koren Templeton'
            avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'}
            inSession= {true}
            onStage= {true}
        />,div);

        ReactDOM.unmountComponentAtNode(div);
    });
    //snapshot testing
    it ('renders this UI as expected', ()=>{
        const tree = renderer.create(<Participant 
            id= {1}
            name= 'Koren Templeton'
            avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'}
            inSession= {true}
            onStage= {true}/>).toJSON();
        expect(tree).toMatchSnapshot();     
    });
});


const participants = [
    {
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    },
    {
        id: 2,
        name: 'Caty Flucker',
        avatar:
            'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    },
    {
        id: 3,
        name: 'Axe Kubicka',
        avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
        inSession: false,
        onStage: false
    },
    {
        id: 4,
        name: 'Frank Runciman',
        avatar:
            'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    },
    {
        id: 5,
        name: 'Ashla Attwool',
        avatar:
            'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    }
];