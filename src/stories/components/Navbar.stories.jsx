import Navbar from "../../components/Navbar";
import React from "react";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Navbar",
  Component: Navbar,
};

const NavigationBar = (args) => {
  return (
    <MemoryRouter>
      <Navbar {...args} />
    </MemoryRouter>
  );
};

export const Primary = NavigationBar.bind({});

Primary.args = {};

export const ActivePage = NavigationBar.bind({});

ActivePage.args = {
  color: "Active",
};

export const MobileNavbar = NavigationBar.bind({});

MobileNavbar.args = {
    mobile: 'mobile'
};

export const TabletNavbar = NavigationBar.bind({});

TabletNavbar.args = {
    tablet: 'tablet'
};

export const OpenedMobile = NavigationBar.bind({});

TabletNavbar.args = {};
