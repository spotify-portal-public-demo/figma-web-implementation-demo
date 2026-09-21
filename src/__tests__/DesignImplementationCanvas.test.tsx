import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { DesignImplementationCanvas } from '@/components/DesignImplementationCanvas';

describe('DesignImplementationCanvas', () => {
  it('renders an accessible interactive baseline', async () => {
    const user = userEvent.setup();
    render(<DesignImplementationCanvas />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Design implementation canvas',
      }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', { name: 'Verify interaction' }),
    );

    expect(screen.getByRole('status')).toHaveTextContent(
      'Verified interactions: 1',
    );
  });
});
