import React from 'react';
import Button from '.';
import type { ButtonProps } from '.';
import { cleanup, fireEvent, render } from '@testing-library/react';

const defaultProps: ButtonProps = {
  onClick: jest.fn(),
};

const setUp = (args?: ButtonProps) =>
  render(
    <Button {...defaultProps} {...args}>
      Click me
    </Button>
  );

describe('Button', () => {
  afterEach(cleanup);

  it('The onClick function will be called when click', () => {
    const { queryByText } = setUp();
    const btnEl = queryByText('Click me');
    fireEvent.click(btnEl);
    expect(btnEl).toBeTruthy();
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
