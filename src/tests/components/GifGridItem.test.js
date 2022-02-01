import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem'
import '@testing-library/jest-dom';


describe('Test GifGridItem', () => {

  const urlTest = "https://www.test.test";
  const titleTest = "titulo";
  const wrapper = shallow(<GifGridItem url={urlTest} title={titleTest}/>);

  test('Test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener un párrafo con el tittle', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(titleTest);
  });

  test('Debe tener una imagen con alt y source', () => {
    const img = wrapper.find('img');
    expect(img.props().src).toBe(urlTest);
    expect(img.prop('alt')).toBe(titleTest);
  });


  test('Debe tener las classes asignadas de animacion', () => {
    const div = wrapper.find('div');
    expect(div.hasClass("card animate__animated animate__fadeIn")).toBe(true);
  });
  
  
  
  
});

