import type { Meta, StoryObj } from "@storybook/react";

import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    label: {type: "string"}
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: 'Click Me'
  }
};
