import React from 'react';

import {
   CalendarIcon,
   ClockIcon,
   DesktopComputerIcon,
   UsersIcon
} from "@heroicons/react/solid";

import {
   ChevronDownIcon,
   ShoppingBagIcon,
   UserGroupIcon
} from "@heroicons/react/outline";

import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className = "p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow  image  title = "Muwonge Lawrence"/>
            <SidebarRow  Icon = {UsersIcon} title = "Friends"/>
            <SidebarRow  Icon = {UserGroupIcon} title = "Groups"/>
            <SidebarRow  Icon = {ShoppingBagIcon} title = "MarketPlace"/>
            <SidebarRow  Icon = {DesktopComputerIcon} title = "Watch"/>
            <SidebarRow  Icon = {CalendarIcon} title = "Events"/>
            <SidebarRow  Icon = {ClockIcon} title = "Memories"/>
            <SidebarRow  Icon = {ChevronDownIcon} title = "See More"/>
        </div>
    );
}

export default Sidebar;
