import { type StoryObj, type Meta } from "@storybook/react";
import RadioButton from "./RadioButton";
import React, { useState } from "react";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p7LKna9JMU0JEkcKamzs53/%F0%9F%93%90-Syntax?node-id=1007-4104&t=Vt5ql6LLs6d29szu-0",
    },
  },
  argTypes: {
    checked: {
      control: "boolean",
    },
    size: {
      options: ["sm", "md"],
      control: { type: "radio" },
    },
    disabled: {
      control: "boolean",
    },
    error: { control: "boolean" },
    label: { control: "text" },
  },
  tags: ["autodocs"],
} as Meta<typeof RadioButton>;

export const Default: StoryObj<typeof RadioButton> = {
  args: { label: "radioButton label" },
};

const RadioButtonInteractive = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <RadioButton
        checked={selectedOption === "mage"}
        value="mage"
        onChange={handleChange}
        name="rpg_class"
        label="Mage"
      />
      <RadioButton
        checked={selectedOption === "warrior"}
        value="warrior"
        onChange={handleChange}
        name="rpg_class"
        label="Warrior"
      />
      <RadioButton
        checked={selectedOption === "archer"}
        value="archer"
        onChange={handleChange}
        name="rpg_class"
        label="Archer"
      />
    </form>
  );
};

export const Interactive: StoryObj<typeof RadioButton> = {
  render: () => <RadioButtonInteractive />,
};
