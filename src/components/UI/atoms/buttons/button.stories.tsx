import  Button  from './button'
// myStories.stories.jsx
import { action } from '@storybook/addon-actions'
import { withDesign } from 'storybook-addon-designs'
import { Story } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
}

export const myStory: Story = (args: any) =>  <Button {...args}>Hello, !</Button>



myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
}


// export const darkTheme = () => (
//   <Button primary={true}> darkTheme </Button>   
// )

export const darkTheme = () => (
  <Button primary={true} onClick={action('clicked')}> darkTheme </Button>   
)
// export const darkTheme = myStory.bind({});

darkTheme.story = {
  primary: false,
  child: "text"
};