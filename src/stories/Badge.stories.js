import Badge from '../components/Badge.vue';

export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {
    default: {
      control: {
        type: 'text'
      },
      description: 'Slot content',
    },
    outline: {
      control: {
        type: 'boolean'
      }
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    label: {
      control: {
        type: 'text'
      }
    }
  },
};

const Template = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<Badge v-bind="args">{{ args.default }}</Badge>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Secondary'
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  label: 'Outline'
};

export const WithSlot = Template.bind({});
WithSlot.args = {
  color: 'secondary',
  default: 'WithSlot'
};
