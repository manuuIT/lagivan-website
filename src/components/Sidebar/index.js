import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
 
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
    
    </SidebarContainer>
  );
};

export default Sidebar;
