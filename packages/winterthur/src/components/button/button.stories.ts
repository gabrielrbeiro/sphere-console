import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  args: {
    onClick: action('on-click'),
  },
  argTypes: {
    label: {type: "string"},
    variant: {
      options: ['default', 'primary', 'secondary', 'danger'],
      control: {type: 'radio'}
    },
    icon: {
      options: [
        undefined,
        'ri-home-5-line'
      ],
      control: {
        type: 'select',
        labels: {
          undefined: 'None',
          'ri-home-5-line': 'Home'
        },
      }
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Default',
  args: {
    label: 'Button',
    variant: 'default'
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    label: 'Button',
    variant: 'default',
    disabled: true
  }
};
