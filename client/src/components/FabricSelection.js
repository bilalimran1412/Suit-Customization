import React, { useState } from 'react';
import '../css/FabricSelection.css';
import '../css/stylethumbnailsicon.css';
import Sidebar from './SideBar';
import { useSidebar } from './SidebarContext'
import { useSelectedData } from '../context/SelectedData';

const fabricOptions = [
  { name: 'Twill', type: 'Navy Blue', price: '$349', isNew: false },
  { name: 'Melange', type: 'Twill · Iron gray', price: '$349', isNew: false },
  { name: 'Comfort stretch', type: 'Basic · Twill', price: '$299', isNew: false },
  { name: 'Comfort stretch', type: 'Basic · Melange', price: '$284.05', isNew: true, discount: true },
  { name: 'Shiny', type: 'Dobby · Celebration', price: '$349', isNew: true },
  { name: 'Nailhead', type: 'Cobalt Blue · Celebration', price: '$389', isNew: false },
  { name: 'Twill', type: 'Navy Blue', price: '$349', isNew: false },
  { name: 'Melange', type: 'Twill · Iron gray', price: '$349', isNew: false },
  { name: 'Comfort stretch', type: 'Basic · Twill', price: '$299', isNew: false },
  { name: 'Comfort stretch', type: 'Basic · Melange', price: '$284.05', isNew: true, discount: true },
  { name: 'Shiny', type: 'Dobby · Celebration', price: '$349', isNew: true },
  { name: 'Nailhead', type: 'Cobalt Blue · Celebration', price: '$389', isNew: false },
];

const FabricSelection = ({ onSelectFabric, onNext, onSelectStyle, onselectPrice, className }) => {
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  const handleFabricSelection = (fabricName, ft, fabricPrice) => {
    setSelectedFabric(fabricName);
    onSelectFabric(fabricName);
    onSelectStyle(ft);
    onselectPrice(fabricPrice);
    onNext();
  };

  // Filter fabrics based on the search term
  const filteredFabrics = fabricOptions.filter(
    (fabric) =>
      fabric.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fabric.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filters = [
    {
      title: 'Highlights',
      items: ['New', 'Best-Seller', 'Premium', 'Italian Mills', 'Stretch', 'Tweed', 'Seasonal Colour'],
    },
    {
      title: 'Occasion',
      items: ['Business', 'Casual', 'Celebration', 'Smart casual'],
    },
    {
      title: 'Color',
      items: ['Blue', 'White', 'Black', 'Grey', 'Green', 'Purple', 'Yellow', 'Brown', 'Red', 'Beige', 'Pink', 'Orange'],
    },
    {
      title: 'Season',
      items: ['Year round', 'Summer', 'Winter'],
    },
    {
      title: 'Pattern',
      items: ['Solid', 'Striped', 'Checked'],
    },
  ];

  const { toggleSidebar, isSidebarVisible } = useSidebar();


  return (
    <div className=''>
      <Sidebar filters={filters} />
      <div className={`fabric-selection ${className} ${isSidebarVisible ? 'opensidebar' : ''}`}>

        <div className='filter_hdr header_fabrics'>
          <div className='row action active'>

            <div className="action_container">
              {!isSidebarVisible && (
                <>
                  <div className="input_search">
                    <input
                      name="search_name"
                      type="text"
                      placeholder="Search fabrics by name or properties"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div class="bton filter" onClick={toggleSidebar}>
                    <div class="icon">
                      <img src="https://d1fufvy4xao6k9.cloudfront.net/images/personalize/icons/filter_icon.svg" alt="" />
                    </div>
                    <span class="text">filters <span class="filters_applied"></span></span>
                  </div>
                </>
              )}
              {isSidebarVisible && (
                <div class="bton apply show" onClick={toggleSidebar}>
                  <div class="icon">
                    <img src="https://d1fufvy4xao6k9.cloudfront.net/images/personalize/icons/icon_hidefilters_gray.svg" alt="" />
                  </div>
                  <span class="text">hide</span>
                </div>
              )}
              <div class="bton trash">
                <div class="icon">
                  <img src="https://d1fufvy4xao6k9.cloudfront.net/images/personalize/icons/trash_icon.svg" alt="" />
                </div>
                <span class="text">Remove</span>
              </div>
            </div>

            <span class="resume"><span class="detail number">193</span> / <span class="p_type detail total_number">197</span></span>
          </div>
        </div>
        <div className="fabric-grid">
          {filteredFabrics.map((fabric, index) => (
            <div
              key={index}
              className={`fabric-item ${fabric.name === selectedFabric ? 'active' : ''} ${fabric.isNew ? 'new' : ''
                } ${fabric.discount ? 'discount' : ''}`}
              onClick={() => handleFabricSelection(fabric.name, fabric.type, fabric.price)}
            >
              <div className="fabric-thumbnail">
                <img src={`./images/${fabric.name.toLowerCase().replace(/\s+/g, '-')}.jpg`} alt={fabric.name} />
                <div className="active_preview"></div>
              </div>
              <div className="fabric-info">
                <p className="fabric-name">{fabric.name}</p>
                <p className="fabric-type">{fabric.type}</p>
                <p className="fabric-price">{fabric.price}</p>
                {fabric.isNew && <span className="badge">NEW</span>}
                {fabric.discount && <span className="badge discount-badge">SALE</span>}
              </div>
            </div>
          ))}
          {filteredFabrics.length === 0 && <p>No fabrics match your search.</p>}
        </div>
      </div>
    </div>

  );
};

export default FabricSelection;
