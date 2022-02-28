import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('contact form is visible', () => {
    it('inserts contact me in h1', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });
})

describe('submit is visible on button', () => {
    it('inserts submit into button', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
})