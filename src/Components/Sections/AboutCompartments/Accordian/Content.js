import React from "react";
import { useTabContext } from "../../../../contexts/TabContext";

const Content = ({ tabs }) => {
  const { openTabs, activeTab, closeTab, switchTab } = useTabContext();

  const handleCloseTab = (tabId) => {
    closeTab(tabId);
  };

  return (
    <div className="bodyWraperContent border-end h-100 p-0">
      <div className="tabs-container d-flex flex-column h-100">
        {openTabs.length > 0 && (
          <>
            {/* Tab Headers */}
            <div className="tab-headers d-flex border-bottom">
              {openTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-header small p-2 border-end pe-cursor ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => switchTab(tab.id)}
                  style={{
                    minWidth: "120px",
                    background: activeTab === tab.id ? "#1e1e1e" : "#2d2d2d",
                    color: activeTab === tab.id ? "#fff" : "#ccc",
                    borderBottom:
                      activeTab === tab.id ? "2px solid #3bc0a5" : "none",
                  }}
                >
                  {tab.title}
                  <i
                    className="bi bi-x pe-cursor ms-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCloseTab(tab.id);
                    }}
                    style={{
                      opacity: 0.7,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = 1)}
                    onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
                    title="Close tab"
                  ></i>
                </div>
              ))}
            </div>

            {/* Active Tab Content */}
            {activeTab && (
              <div className="tab-content flex-grow-1 p-3">
                <div className="content-wrapper">
                  {openTabs.find((tab) => tab.id === activeTab)?.content}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
