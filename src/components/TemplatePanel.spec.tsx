import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TemplatePanel } from './TemplatePanel';

describe('TemplatePanel', () => {
  it('adds the starting values', () => {
    render(<TemplatePanel />);
    expect(screen.getByRole('status')).toHaveTextContent('4');
  });

  it('adds what the user types', async () => {
    const user = userEvent.setup();
    render(<TemplatePanel />);

    const left = screen.getByLabelText('First number');
    await user.clear(left);
    await user.type(left, '10');

    expect(screen.getByRole('status')).toHaveTextContent('12');
  });

  it('asks for numbers when an input is not one', async () => {
    const user = userEvent.setup();
    render(<TemplatePanel />);

    const right = screen.getByLabelText('Second number');
    await user.clear(right);
    await user.type(right, 'abc');

    expect(screen.getByRole('status')).toHaveTextContent('Enter two numbers');
  });
});
