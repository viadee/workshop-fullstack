import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AppHeader from './app-header';

describe('AppHeader', () => {
  it('renders the header with the correct text', () => {
    //Arrange is empty
    //Act
    render(<AppHeader/>);
    //Assert
    expect(screen.getByText('viaTodo')).toBeInTheDocument();
  });
});