import { Meta, Story } from '@storybook/vue3';
import { ButtonProps } from './Button.types';
import { colorList } from '../../types/Color.types'
import Button from './Button.vue';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colorList,
    },
    textColor: {
      control: { type: 'select' },
      options: ['white', 'black'],
    },
    label: {
      control: {
        type: 'text'
      }
    },
    onClick: { action: 'clicked' }
  },
} as Meta;

const Template: Story<ButtonProps>  = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default'
};

export const White = Template.bind({});
White.args = {
  label: 'White',
  color: 'white',
  textColor: 'black'
};
