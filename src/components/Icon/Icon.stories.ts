import { Meta, Story } from '@storybook/vue3';
import { IconProps, iconList } from './Icon.types';
import { sizeList } from '../../types/Size.types'
import { colorList } from '../../types/Color.types'
import Icon from './Icon.vue';

export default {
  title: 'Example/Icon',
  component: Icon,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: sizeList,
    },
    color: {
      control: { type: 'select' },
      options: colorList,
    },
    name: {
      control: { type: 'select' },
      options: iconList,
    },
  },
} as Meta;

const Template: Story<IconProps>  = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: '<Icon v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  name: 'font_download',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  name: 'font_download',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  name: 'font_download',
};
