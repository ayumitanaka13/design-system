import React, { Component } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default Text',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// export const Default = () => {
//   return <Button variant="primary">Click Me</Button>;
// };
export const Secondary = Template.bind({});
// export const Secondary = () => {
//   return <Button variant="secondary">Click Me</Button>;
// };

Secondary.args = {
  variant: 'secondary',
  children: 'I am secondary',
  onClick: action('secondary click')
};
