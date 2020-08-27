
import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../components/home/Home';




describe('Componente <Home />', () => {

    test('Debe mostrar un h2', () => {
        const wrapper = shallow( <Home /> );
        
        const title = wrapper.find('h2').text();
        expect( title ).toBe('Anuncios');
    });

    test('Mostrar el componente correctamente', () => {
        const wrapper = shallow( <Home /> )
        expect( wrapper ).toMatchSnapshot();
    });

});