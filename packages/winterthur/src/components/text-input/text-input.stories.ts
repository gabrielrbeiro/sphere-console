import type { Meta, StoryObj } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { TextInput } from '.';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered'
  },
  args: {},
  argTypes: {
    type: {
      options: ["email", "number", "password", "search", "tel", "text", "url"],
      control: {type: 'select'}
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Default',
  args: {
    type: 'text'
  }
};
