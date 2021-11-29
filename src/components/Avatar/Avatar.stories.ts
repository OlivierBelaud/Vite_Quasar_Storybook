import { Meta, Story } from '@storybook/vue3'
import { AvatarProps } from './Avatar.types'
import { sizeList } from '@models/sizes'
import { colorList } from '@models/colors'
import Avatar from './Avatar.vue'

interface AvatarPropsExtended extends AvatarProps {
  default: string
}

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    default: {
      control: { type: 'text' },
      description: 'Slot content',
      table: {
        type: { summary: 'html' },
        defaultValue: { summary: null },
      },
    },
    size: {
      control: { type: 'select' },
      options: sizeList,
    },
    color: {
      control: { type: 'select' },
      options: colorList,
    },
    textColor: {
      control: { type: 'select' },
      options: ['white', 'black'],
    },
    icon: {
      control: { type: 'select' },
      options: [
        'directions',
        'font_download',
        'warning',
        'format_size',
        'print',
        'today',
        'style',
      ],
    },
  },
} as Meta

const Template: Story<AvatarPropsExtended> = (args) => ({
  components: { Avatar },
  setup() {
    return { args }
  },
  template: `<Avatar v-bind="args">${args.default}</Avatar>`,
})

export const Default = Template.bind({})
Default.args = {
  default: 'J',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  default: 'J',
}

export const WithImage = Template.bind({})
WithImage.args = {
  size: 'lg',
  default: `<img src="https://cdn.quasar.dev/img/avatar.png">`,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  size: 'lg',
  icon: 'directions',
  default: '',
}
