import { type StoryObj, type Meta } from "@storybook/react";
import Button from "./Button";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p7LKna9JMU0JEkcKamzs53/Cambly-Design-System-(Draft)?node-id=994%3A2346",
    },
  },
  argTypes: {
    color: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "destructive-primary",
        "destructive-secondary",
        "destructive-tertiary",
        "success",
        "branded",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
  tags: ["autodocs"],
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: { text: "Call to action" },
};
export const Small: StoryObj<typeof Button> = {
  args: { ...Default.args, size: "sm" },
};
export const Medium: StoryObj<typeof Button> = {
  args: { ...Default.args, size: "md" },
};
export const Large: StoryObj<typeof Button> = {
  args: { ...Default.args, size: "lg" },
};
export const Secondary: StoryObj<typeof Button> = {
  args: { ...Default.args, color: "secondary" },
};
export const Tertiary: StoryObj<typeof Button> = {
  args: { ...Default.args, color: "tertiary" },
};
export const DestructivePrimary: StoryObj<typeof Button> = {
  args: { ...Default.args, color: "destructive-primary" },
};
export const DestructiveSecondary: StoryObj<typeof Button> = {
  args: { ...Default.args, color: "destructive-secondary" },
};
export const DestructiveTertiary: StoryObj<typeof Button> = {
  args: { ...Default.args, color: "destructive-tertiary" },
};
export const Branded: StoryObj<typeof Button> = {
  args: { ...Default.args, color: "branded" },
};
export const Loading: StoryObj<typeof Button> = {
  args: { ...Default.args, loading: true, loadingText: "Connecting…" },
};
export const WithStartIcon: StoryObj<typeof Button> = {
  args: { ...Default.args, startIcon: FavoriteBorder },
};
export const WithEndIcon: StoryObj<typeof Button> = {
  args: { ...Default.args, endIcon: FavoriteBorder },
};
