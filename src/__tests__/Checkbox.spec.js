import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/Checkbox';

beforeEach(cleanup); // clean the DOM!

jest.mock('../firebase', () => ({
 firebase: {
  firestore: jest.fn(() => ({
   collection: jest.fn(() => ({
    doc: jest.fn(() => ({
     update: jest.fn(),
    })),
   })),
  })),
 },
}));

// check checbox if it is rendered or not
describe('<Checkbox />', () => {
 describe('Success', () => {
  it('renders the task checkbox', () => {
   const { queryByTestId, debug } = render(<Checkbox id="1" taskDesc="Finish balana" />)
   debug()
  })
 })
})