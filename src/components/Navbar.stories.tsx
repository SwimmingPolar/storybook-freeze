import { RouterProvider } from "react-router-dom";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { memoryRouter } from "../routes";
import Navbar, { menu } from "./Navbar";
import { SBArrayType } from "@storybook/csf";

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  args: { menu },
  argTypes: {
    menu: {
      type: {
        name: "array",
      } as SBArrayType,
    },
    hide: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [(Story) => <RouterProvider router={memoryRouter(<Story />)} />],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.storyName = "Show Menu";

export const Hide = Template.bind({});
Hide.storyName = "Hide Menu";
Hide.args = { hide: true };
