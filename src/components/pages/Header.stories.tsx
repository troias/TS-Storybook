import  Header  from '../pages/Header'
import { withDesign } from 'storybook-addon-designs'
import { Story } from '@storybook/react'

export default {
  title: 'Header',
  component: Header,
  decorators: [withDesign],
}

export const Default: Story = (args: any) =>  <Header {...args}>Hello, !</Header>



Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
}


// export const darkTheme = () => (
//   <Button primary={true}> darkTheme </Button>   
// )

export const darkTheme = () => (
  <Header theme> darkTheme </Header>   
)
// export const darkTheme = myStory.bind({});

// darkTheme.story = {
//   primary: false,
//   child: "text"
// };