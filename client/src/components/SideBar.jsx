import React, { useState } from 'react';
import { useSidebar } from './SidebarContext';
import '../css/sideBar.css';

const Sidebar = ({ filters }) => {
  const { isSidebarVisible, toggleSidebar } = useSidebar();
  const [activeItems, setActiveItems] = useState([]);  

  const handleItemClick = (itemName) => {
    if (activeItems.includes(itemName)) {
      setActiveItems(activeItems.filter(item => item !== itemName));
    } else {
      setActiveItems([...activeItems, itemName]);
    }
  };

  return (
    <div className={`filters filters fabric_step ${isSidebarVisible ? 'active' : 'closed_side'}`}>
      <div className="menu_filter">
        <div className="content">
          <div className="sidebar-container content_filters ps-container ps-active-y">
            <div className="sidebar item_menu_filter highlights active">
              <div className="sub_menu_filter active suit">
                {filters.map((filter, index) => (
                  <div key={index} className="filter-group item_menu_filter highlights active">
                    <div className="items item_menu row active">
                      <span className="filter-title title">{filter.title}</span>
                    </div>
                    <ul className="filter">
                      {filter.items.map((item, idx) => (
                        <li
                          key={idx}
                          className={`filter-item ${activeItems.includes(item) ? 'active' : ''}`} 
                          onClick={() => handleItemClick(item)}  
                        >
                          <a href="#" className="filter filter-link">
                            {item}
                          </a>
                          <span className="check"></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
