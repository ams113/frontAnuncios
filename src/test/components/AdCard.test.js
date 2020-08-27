
import React from 'react';
import { shallow } from 'enzyme';
import { AdCard } from '../../components/home/AdCard';


describe('Componente <adCard />', () => {

    test('Mostrar el componente correctamente', () => {

        const foo = '';
        const wrapper = shallow( <AdCard 
            id={ foo }
            description={ foo }
            type= { foo }
            score= { foo }
            imageIds= { foo }
            size= { foo }
            km= { foo }
            color= { foo }
            fabricant= { foo }
            height= { foo } 
            /> );
        expect( wrapper ).toMatchSnapshot();
    });

});