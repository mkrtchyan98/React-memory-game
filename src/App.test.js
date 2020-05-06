import React,{useState} from 'react';
import App from './App';
import Header from './components/Header';
import Board from './components/board'
import LevelFirst from './components/Levels/LevelFirst';
import buildCards from './buildcards'
import LevelSet from './components/Levels/LevelSet';

import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount,shallow } from 'enzyme';

configure({ adapter: new Adapter() });

const deck = buildCards(4);

describe('App',() => {
	test('snapshot renders',() => {
		const component = renderer.create(<App />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	})
})

describe('Header',() => {
	test('snapshot renders',() => {
		const component = renderer.create(<Header />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	})
})

describe('LevelFirst',() => {
	test('snapshot renders',() => {
		const component = shallow(<LevelFirst/>);
		expect(component).toMatchSnapshot();
	});
	it('renders inner Board',() => {
		const wrapper = mount(<LevelFirst />);
		expect(wrapper.find(Board));
	})
})

describe('board',()=>{
	test(' renders',()=> {
 const component = shallow(<Board cards={deck}/>);
		expect(component).toMatchSnapshot();
	})
it('renders props',()=>{
	 const component = mount(<Board cards={deck}/>);
expect(component.prop('cards')).toHaveLength(8);
});
it('renders cards',()=>{
	 const component = mount(<Board cards={deck}/>);
expect(component.find('li')).toHaveLength(8);
});
it('restart moves',()=> {
		 const component = mount(<Board cards={deck}/>);
		 expect(component.find('button').simulate('click'));
		 expect(component.find('div h1').text()).toEqual('Your moves amount:0')

})
})
