import React from 'react';

const StyleSelection = ({ onSelectStyle, onNext }) => {
  const styles = ['Single-breasted 1 button', 'Single-breasted 2 buttons', 'Mandarin'];

  const handleStyleClick = (style) => {
    onSelectStyle(style);
    onNext();
  };

  return (
    <div>
      <h2>Select Style</h2>
      <ul>
        {styles.map((style) => (
          <li key={style} onClick={() => handleStyleClick(style)}>
            {style}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StyleSelection;
