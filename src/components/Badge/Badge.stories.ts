import { Meta, Story } from '@storybook/vue3'
import { BadgeProps } from './Badge.types'
import { colorList } from '@models/colors'
import Badge from './Badge.vue'

interface BadgePropsExtended extends BadgeProps {
  default: string
}

export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {
    default: {
      control: {
        type: 'text',
      },
      description: 'Slot content',
    },
    outline: {
      control: {
        type: 'boolean',
      },
    },
    color: {
      control: { type: 'select' },
      options: colorList,
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<BadgePropsExtended> = (args) => ({
  components: { Badge },
  setup() {
    return { args }
  },
  template: '<Badge v-bind="args">{{ args.default }}</Badge>',
})

export const Default = Template.bind({})
Default.args = {
  label: 'Default',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: 'Secondary',
}

export const Outline = Template.bind({})
Outline.args = {
  outline: true,
  label: 'Outline',
}

export const WithSlot = Template.bind({})
WithSlot.args = {
  color: 'secondary',
  default: 'WithSlot',
}
