import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';  

describe('Test useFetchGifs', () => {
    test('Debe retornar el estado inicial', async() => {
        const category = "Goku";
        const {result,waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        const {data,loading} = result.current;

        await waitForNextUpdate({timeout: 5000});

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
    test('Debe de retornar un array de img y loading a false', async() => {
        const category = "Goku";
        const {result,waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate({timeout: 5000});
        
        const {data,loading} = result.current;


        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    

});
