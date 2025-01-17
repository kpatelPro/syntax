import { useState } from "react";
import { type StoryObj, type Meta } from "@storybook/react";
import Chip from "./Chip";
import Star from "@mui/icons-material/Star";
import Box from "../Box/Box";

export default {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p7LKna9JMU0JEkcKamzs53/%F0%9F%93%90-Syntax?type=design&node-id=6156%3A25032&mode=design&t=SSblm5y2vyrOKil1-1",
    },
  },
  argTypes: {
    selected: {
      control: "boolean",
    },
    text: {
      control: "text",
    },
    size: { options: ["sm", "lg"], control: { type: "radio" } },
  },
  tags: ["autodocs"],
} as Meta<typeof Chip>;

export const Default: StoryObj<typeof Chip> = {
  args: {
    text: "text on chip",
    selected: false,
  },
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  render: ({ ...args }) => <Chip {...args} />,
};

const ChipInteractive = () => {
  const [isSmSelected, setIsSmSelected] = useState(false);
  const [isLgSelected, setIsLgSelected] = useState(false);
  const handleSmChange = () => {
    setIsSmSelected(!isSmSelected);
  };
  const handleLgChange = () => {
    setIsLgSelected(!isLgSelected);
  };

  return (
    <Box display="flex" gap={2} alignItems="center" flexWrap="wrap">
      <Chip
        text="interactive sm chip"
        size="sm"
        onChange={handleSmChange}
        selected={isSmSelected}
      />
      <Chip
        text="interactive lg chip"
        size="lg"
        onChange={handleLgChange}
        selected={isLgSelected}
      />
    </Box>
  );
};
const ChipIconInteractive = () => {
  const [isSmSelected, setIsSmSelected] = useState(false);
  const [isLgSelected, setIsLgSelected] = useState(false);
  const handleSmChange = () => {
    setIsSmSelected(!isSmSelected);
  };
  const handleLgChange = () => {
    setIsLgSelected(!isLgSelected);
  };

  return (
    <Box display="flex" gap={2} alignItems="center" flexWrap="wrap">
      <Chip
        icon={Star}
        text="interactive sm chip"
        size="sm"
        onChange={handleSmChange}
        selected={isSmSelected}
      />
      <Chip
        icon={Star}
        text="interactive lg chip"
        size="lg"
        onChange={handleLgChange}
        selected={isLgSelected}
      />
    </Box>
  );
};

export const Interactive: StoryObj<typeof Chip> = {
  render: () => <ChipInteractive />,
};

export const IconInteractive: StoryObj<typeof Chip> = {
  render: () => <ChipIconInteractive />,
};
