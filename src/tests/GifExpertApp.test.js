import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import { GifExpertApp } from '../GifExpertApp';

describe('Test GifExpertApp', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostar una lista de categorias', () => {
        const categories = ['Primera', 'segunda'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    

});
