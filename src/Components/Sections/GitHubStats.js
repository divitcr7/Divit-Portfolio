import React from "react";
import GitHubStats from "../GitHubCalendar/GitHubCalendar";

export default function GitHubStatsSection() {
  return (
    <div className="MySection" id="github-stats">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <GitHubStats />
          </div>
        </div>
      </div>
    </div>
  );
} 