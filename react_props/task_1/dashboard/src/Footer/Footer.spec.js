import Footer from './Footer';
import { render, screen } from '@testing-library/react';


test('footer paragraphs', () => {
	render(<Footer/>)
    const footerText = screen.getByText(/copyright.*holberton school/i);
    expect(footerText).toBeInTheDocument();
});
