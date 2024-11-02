import React from 'react';

interface TabProps {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTabIndex, setActiveTabIndex }) => {
  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 focus:outline-none ${
              index === activeTabIndex ? 'border-b-2 border-blue-500 font-bold' : ''
            }`}
            onClick={() => setActiveTabIndex(index)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default React.memo(Tabs);
