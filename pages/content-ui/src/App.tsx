import React, { useState } from 'react';
import closedIcon from '../public/closed.svg';
import openedIcon from '../public/opened-hover.svg';
import openedHoldIcon from '../public/opened-hold.svg';
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

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = [
    { title: 'Tab 1', content: <div>Content 1</div> },
    { title: 'Tab 2', content: <div>Content 2</div> },
    { title: 'Tab 3', content: <div>Content 3</div> },
  ];

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
      ">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onOpenListClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}>
        <img
          src={hovered ? (hold ? openedHoldIcon : openedIcon) : closedIcon}
          alt="List"
          className={`ml-3 transition-transform duration-500 ${hovered ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      {hovered && (
        <div className="absolute top-full right-0 w-[500px] h-[700px] bg-red-300 rounded">
          <Tabs tabs={tabs} activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />
        </div>
      )}
    </div>
  );
};

export default App;
