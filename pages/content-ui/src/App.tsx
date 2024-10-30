import React, { useState } from 'react';
import closedIcon from '../public/closed.svg';
import openedIcon from '../public/opened.svg';
import Tabs from './components/Tabs';

const App: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [hold, setHold] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    if (hold) return;
    setHovered(false);
  };
  const onOpenListClick = () => setHold(!hold);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onOpenListClick();
    }
  };

  const tabs = [
    { title: 'Tab 1', content: <div>Content 1</div> },
    { title: 'Tab 2', content: <div>Content 2</div> },
    { title: 'Tab 3', content: <div>Content 3</div> },
  ];

  // todo 点击图标也有图标颜色切换(三种颜色标记)
  return (
    <div
      className="
        fixed 
        right-[-55px] 
        top-10 
        cursor-pointer 
        transition-transform 
        bg-red-300
        duration-500 
        hover:translate-x-[-30px] 
        w-[100px]
        h-[33px]
        rounded-l-full
        shadow-lg
        border
        border-red-400
      "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenListClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}>
      <div className="relative">
        <img
          src={hovered ? openedIcon : closedIcon}
          alt="List"
          className={`ml-3 transition-transform duration-500 ${hovered ? 'rotate-180' : 'rotate-0'}`}
        />
        {hovered && (
          <div className="absolute top-10px ">
            {' '}
            <Tabs tabs={tabs} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
