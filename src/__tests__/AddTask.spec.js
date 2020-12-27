import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AddTask from '../components/AddTask';
import { useSelectedProjectsValue } from '../context';
import { firebase } from '../firebase'

jest.mock('../context', () => ({
 useSelectedProjectValue: jest.fn(() => ({ selectedProject: '1' })),
 useProjectsValue: jest.fn(() => ({ projects: [] })),
}));

jest.mock('../firebase', () => ({
 firebase: {
  firestore: jest.fn(() => ({
   collection: jest.fn(() => ({
    add: jest.fn(() => Promise.resolve('Never mock firebase')),
   })),
  })),
 },
}));

beforeEach(cleanup)

describe('<AddTask />', () => {
 afterEach(() => {
  jest.clearAllMocks();
 });

 describe('Success', () => {
  it('renders the <AddTask />', () => {
   const { queryByTestId } = render(<AddTask />);
   expect(queryByTestId('add-task-comp')).toBeTruthy();
  });
 })

})
