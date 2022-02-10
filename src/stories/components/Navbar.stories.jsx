import Navbar from "../../components/Navbar";
import React from "react";


export default {
    title: "Components/Navbar",
    Component:Navbar
}

const NavigationBar = (args) => <Navbar  {...args} />;

export const Primary = NavigationBar.bind({});

Primary.args = {
 
};


export const ActivePage = NavigationBar.bind({});

ActivePage.args={
   color:'Active',
}

export const MobileNavbar = NavigationBar.bind({});

MobileNavbar.args={
  
}

export const TabletNavbar = NavigationBar.bind({});

TabletNavbar.args={
 
}

export const OpenedMobile = NavigationBar.bind({});

TabletNavbar.args={
   
}