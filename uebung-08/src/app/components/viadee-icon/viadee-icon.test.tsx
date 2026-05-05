import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import ViadeeIcon from './viadee-icon';

describe('ViadeeIcon', () => {
    it('renders the Viadee Icon', () => {
        //Arrange
        
        //Act
        render(<ViadeeIcon />);
        //Assert
        //expect(screen.getByText('2')).toBeInTheDocument();
    });
});