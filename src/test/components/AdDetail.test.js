
import React from 'react';
import { shallow } from 'enzyme';
import { AdList } from '../../components/home/AdList';

AdD


describe('Componente <adList />', () => {

    test('Mostrar el componente correctamente', () => {
        const wrapper = shallow( <AdList /> )
        expect( wrapper ).toMatchSnapshot();
    });

});