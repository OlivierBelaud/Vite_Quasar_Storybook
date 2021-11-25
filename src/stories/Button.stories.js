import Button from '../components/Button.vue';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
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
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  textColor: 'white',
  label: 'Primary'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   color: 'secondary',
//   label: 'Secondary'
// };

// export const Outline = Template.bind({});
// Outline.args = {
//   outline: true,
//   label: 'Outline'
// };

// export const WithSlot = Template.bind({});
// WithSlot.args = {
//   color: 'secondary',
//   default: 'WithSlot'
// };
