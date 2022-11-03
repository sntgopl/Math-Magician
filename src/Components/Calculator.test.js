import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Test If a user click a button on the Calculator  the display should Update', () => {
  it('If a user click AC button the Calculator Screen is Blank', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole('button', { name: /ac/i }));

    expect(screen.getByTestId('display')).toBeInTheDocument();
  });

  it('If a user click 7 and 8 button the Calculator Screen displays 78', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole('button', { name: /7/i }));
    userEvent.click(screen.getByRole('button', { name: /8/i }));
    expect(screen.getByText(/78/i)).toBeInTheDocument();
  });

  it('If a user click 63, +, and 8 button the Calculator Screen displays 63 + 8', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole('button', { name: /6/i }));
    userEvent.click(screen.getByRole('button', { name: /3/i }));
    userEvent.click(screen.getByRole('button', { name: /x/i }));
    userEvent.click(screen.getByRole('button', { name: /8/i }));
    expect(screen.getByText(/63\x8/i)).toBeInTheDocument();
  });

  it('If a user click 63, +, and 8 button the Calculator Screen displays 63 + 8', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole('button', { name: /6/i }));
    userEvent.click(screen.getByRole('button', { name: /x/i }));
    userEvent.click(screen.getByRole('button', { name: /8/i }));
    userEvent.click(screen.getByRole('button', { name: /=/i }));
    expect(screen.getByText(/48/i)).toBeInTheDocument();
  });
  it('If a user click 6, +, 8 and then = button the Calculator Screen displays 14', () => {
    render(<Calculator />);
    userEvent.click(screen.getByRole('button', { name: /6/i }));
    userEvent.click(screen.getByRole('button', { name: /8/i }));
    expect(screen.getByText(/68/i)).toBeInTheDocument();
  });
});
