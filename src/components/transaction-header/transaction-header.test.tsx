import React from 'react';
import { render, screen } from '@testing-library/react';
import { TransactionHeader } from './transaction-header';

test('renders learn react link', () => {
    render(<TransactionHeader hash="testHash" timestamp={0} />);
    const hash = screen.getByText(/testHash/i);
    expect(hash).toBeInTheDocument();
});