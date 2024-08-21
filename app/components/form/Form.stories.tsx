import { Meta, StoryObj } from '@storybook/react';
import Form from './Form';

const meta:Meta<typeof Form> = {
    title:"Form Register",
    component:Form
}
export default meta

type Story = StoryObj<typeof Form>

export const FormRegister: Story = {
    args:{
        label:"FormRegister"
    }
  };