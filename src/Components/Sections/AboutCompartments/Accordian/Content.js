import React from "react";

const Content = ({ tabs, activeTab }) => {
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="bodyWraperContent  border-end h-100 p-0">
      {activeTabData && (
        <div className="contantwrapper">
          <h3 className=" catName small p-2 border-end m-0">
            {activeTabData.title} <i className="bi bi-x"></i>
          </h3>
          <div className="description p-3 border-top">
            <div className="content-wrapper">
              {activeTabData.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
