import { render } from '@testing-library/react';
import React from 'react';

import type { InputProps } from '.';
import Input from '.';

const defaultProps: InputProps = {
  defaultValue: 1,
};

const setUp = (args?: InputProps) =>
  render(<Input {...defaultProps} {...args} />);

describe('Input', () => {
  it('Should display correct initial value is passed by defaultProps', () => {
    const { queryByTestId } = setUp();
    const inputEl = queryByTestId('input') as HTMLInputElement;
    expect(inputEl.value).toEqual(defaultProps.defaultValue.toString());
  });
});
