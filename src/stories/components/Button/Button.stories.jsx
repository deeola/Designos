import React from "react";
import  Button  from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button  {...args} />;

export const DarkWhite = Template.bind({});
DarkWhite.args = {
  label: "Learn More",
  backgroundColor: "#FFFFFF",
  color: "darkWhite",
};

export const DarkOrange = Template.bind({});
DarkOrange.args = {
  label: "Learn More",
  backgroundColor: "#E7816B",
  color: "darkOrange",
};

export const LightOrange = Template.bind({});
LightOrange.args = {
  label: "Learn More",
  color: "#FFFFFF",
};
