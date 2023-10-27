import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';


const meta: Meta<MenuComponent> = {
  title: 'Menu/Menu',
  component: MenuComponent,
  parameters: {
    layout: 'tablet',
  },
  decorators: [
    moduleMetadata({
      declarations: [MenuComponent],
      imports: [CommonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const Menu: Story = {
  render: (args: MenuComponent) => ({
    props: args,
  }),
};

