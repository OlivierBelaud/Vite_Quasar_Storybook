import Avatar from '../components/Avatar.vue';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    default: {
      control: {
        type: 'text'
      },
      description: 'Slot content',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    textColor: {
      control: { type: 'select' },
      options: ['white', 'black'],
    },
  },
};

const Template = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: `<Avatar v-bind="args">${ args.default }</Avatar>`,
});

export const Default = Template.bind({});
Default.args = {
  default: 'J'
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  default: 'J'
};

export const WithImage = Template.bind({});
WithImage.args = {
  size: 'lg',
  default: `<img src="https://cdn.quasar.dev/img/avatar.png">`
};
