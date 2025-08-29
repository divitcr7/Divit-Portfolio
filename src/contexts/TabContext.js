import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};

export const TabProvider = ({ children }) => {
  // Import bio tab data
  const bioTab = {
    id: 1,
    title: "bio",
    content: (
      <div className="text-white" id="bio">
        <p>Hi, I'm a Software Engineer. I break things until they work.</p>
        <p>Fluent in Python, JavaScript, and apologizing to QA.</p>
        <p>My hobbies include:</p>
        <p>Writing "temporary" code that survives five years.</p>
        <p>Naming variables like foo, bar, and whyGodWhy.</p>
      </div>
    ),
  };

  const [openTabs, setOpenTabs] = useState([bioTab]); // bio is open by default
  const [activeTab, setActiveTab] = useState(1); // bio is active by default

  const addTab = (tab) => {
    // Check if tab is already open
    const existingTab = openTabs.find((openTab) => openTab.id === tab.id);
    if (!existingTab) {
      setOpenTabs((prev) => [...prev, tab]);
    }
    // Set as active tab regardless
    setActiveTab(tab.id);
  };

  const closeTab = (tabId) => {
    const updatedTabs = openTabs.filter((tab) => tab.id !== tabId);
    setOpenTabs(updatedTabs);

    // If closing the active tab, switch to the next available tab
    if (activeTab === tabId) {
      if (updatedTabs.length > 0) {
        // If there are remaining tabs, activate the last one
        setActiveTab(updatedTabs[updatedTabs.length - 1].id);
      } else {
        // If no tabs remain, set to null or default
        setActiveTab(null);
      }
    }
  };

  const switchTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <TabContext.Provider
      value={{
        openTabs,
        activeTab,
        addTab,
        closeTab,
        switchTab,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
