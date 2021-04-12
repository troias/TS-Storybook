import  Button  from './button'
// myStories.stories.jsx
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
}

export const myStory = (args: any) =>  <Button {...args}>Hello, World!</Button>

myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
}