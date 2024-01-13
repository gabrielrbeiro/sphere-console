import type { Meta, StoryObj } from "@storybook/react";
import { Header } from '.';
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Header> = {
  title: 'Sections/Header',
  component: Header,
  parameters: {
    layout: 'full'
  },
  args: {
    onMenuButtonClick: action('onMenuButtonClick'),
  },
  argTypes: {
    moduleTitle: {
      defaultValue: 'Winterthur',
      control: { type: 'text' }
    },
    pageTitle: {
      defaultValue: 'Dashboard',
      control: { type: 'text' }
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const PageHeader: Story = {
  name: 'Page Header',
  args: {
    moduleTitle: 'Winterthur',
    pageTitle: 'Dashboard',
    user: {
      name: 'Gabriel Ribeiro',
      email: 'ribeirogabriel@icloud.com',
      avatar: 'https://avatars.githubusercontent.com/u/1191185?v=4'
    },
    modules: [
      {
        icon: 'ri-box-3-line',
        title: 'Admin Console',
        url: '/console',
        description: 'Manages your resources and services'
      },
      {
        icon: 'ri-shield-keyhole-line',
        title: 'Identity Center',
        url: '/identity',
        description: 'Manages your users, roles and permissions'
      }
    ]
  }
};
