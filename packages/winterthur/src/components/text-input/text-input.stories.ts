import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TextInput } from '.';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered'
  },
  args: {
    onChange: action('onChange'),
  },
  argTypes: {
    type: {
      options: ["email", "number", "password", "search", "tel", "text", "url"],
      control: {type: 'select'}
    },
    label: {
      control: {type: 'text'}
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Default',
  args: {
    type: 'text',
    id: 'txtStorybookDefault',
    label: 'First name',
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    type: 'text',
    id: 'txtStorybookDisabled',
    label: 'First name',
    disabled: true
  }
};

export const WithIcon: Story = {
  name: 'With Icon',
  args: {
    type: 'text',
    id: 'txtStorybookDisabled',
    label: 'Home address',
    icon: 'ri-home-5-line'
  }
};

export const WithSuffix: Story = {
  name: 'With Suffix',
  args: {
    type: 'text',
    id: 'txtStorybookDisabled',
    label: 'Search',
    suffix: '⌘ + K',
    icon: 'ri-search-line'
  }
};
