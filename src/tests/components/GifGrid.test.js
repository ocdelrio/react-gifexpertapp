import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs')

describe('Test de GifGrid', () => {

    const categoria = "Pokemon";
    let wrapper;

    test('Debe de mostrarse correctamente', () => {

        //userFetchGifs mokeado
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        wrapper = shallow(<GifGrid category={categoria}/>)
        expect(wrapper).toMatchSnapshot();
    });    

    test('Debe mostar items cuando se cargan imagenes.', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/test/unitarios/imagen.jpg',
            title: 'ABC'
        }];

        //userFetchGifs mokeado
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        wrapper = shallow(<GifGrid category={categoria}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    


});
