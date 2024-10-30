import React, { useState } from 'react';

interface TabProps {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <div style={styles.tabList}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            role="tab"
            tabIndex={0}
            style={{
              ...styles.tab,
              borderBottom: activeIndex === index ? '2px solid blue' : '2px solid transparent',
            }}
            onClick={() => setActiveIndex(index)}
            onKeyDown={e => handleKeyDown(e, index)}>
            {tab.title}
          </div>
        ))}
      </div>
      <div style={styles.tabContent}>{tabs[activeIndex].content}</div>
    </div>
  );
};

const styles = {
  tabList: {
    display: 'flex',
    cursor: 'pointer',
  },
  tab: {
    padding: '10px 20px',
  },
  tabContent: {
    padding: '20px',
  },
};

export default Tabs;
