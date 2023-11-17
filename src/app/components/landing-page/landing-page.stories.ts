import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';


const meta: Meta<LandingPageComponent> = {
  title: 'Landing Page/ Main Page',
  component: LandingPageComponent,
  parameters: {
    layout: 'tablet',
  },
  decorators: [
    moduleMetadata({
      declarations: [LandingPageComponent],
      imports: [CommonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<LandingPageComponent>;

export const LandingPage: Story = {
  render: (args: LandingPageComponent) => ({
    props: args,
  }),
};

