
import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {createSerializer} from 'enzyme-to-json';
 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));