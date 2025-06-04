import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GitHubActivity.css';

export default function GitHubActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetchGitHubActivity();
  }, []);

  const fetchGitHubActivity = async () => {
    try {
      // Fetch recent events from GitHub API
      const response = await axios.get('https://api.github.com/users/divitcr7/events');
      const recentEvents = response.data.slice(0, 10).map(event => {
        const date = new Date(event.created_at);
        const timeAgo = getTimeAgo(date);
        
        let action = '';
        let icon = '';
        let details = '';

        switch (event.type) {
          case 'PushEvent':
            action = 'pushed to';
            icon = 'bi-git';
            details = `${event.payload.commits?.length || 0} commit(s)`;
            break;
          case 'CreateEvent':
            action = 'created';
            icon = 'bi-plus-circle';
            details = event.payload.ref_type;
            break;
          case 'StarEvent':
            action = 'starred';
            icon = 'bi-star';
            details = '';
            break;
          case 'ForkEvent':
            action = 'forked';
            icon = 'bi-diagram-3';
            details = '';
            break;
          case 'IssuesEvent':
            action = `${event.payload.action} issue`;
            icon = 'bi-exclamation-circle';
            details = '';
            break;
          case 'PullRequestEvent':
            action = `${event.payload.action} pull request`;
            icon = 'bi-arrow-up-right-circle';
            details = '';
            break;
          case 'WatchEvent':
            action = 'watched';
            icon = 'bi-eye';
            details = '';
            break;
          default:
            action = event.type.replace('Event', '').toLowerCase();
            icon = 'bi-activity';
            details = '';
        }

        return {
          id: event.id,
          action,
          icon,
          repo: event.repo.name,
          timeAgo,
          details,
          type: event.type
        };
      });
      
      setActivities(recentEvents);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub activity:', error);
      setLoading(false);
    }
  };

  const getTimeAgo = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`github-activity ${isExpanded ? 'expanded' : ''}`}>
      <div className="activity-header" onClick={toggleExpanded}>
        <div className="activity-title">
          <i className="bi bi-terminal"></i>
          <span>git_activity</span>
        </div>
        <div className="activity-controls">
          <span className="activity-count">{activities.length}</span>
          <i className={`bi ${isExpanded ? 'bi-dash' : 'bi-plus'}`}></i>
        </div>
      </div>
      
      {isExpanded && (
        <div className="activity-content">
          {loading ? (
            <div className="activity-loading">
              <span className="terminal-cursor">$</span> Fetching git log...
            </div>
          ) : (
            <div className="activity-list">
              {activities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-meta">
                    <span className="activity-time">{activity.timeAgo}</span>
                    <i className={`bi ${activity.icon} activity-icon`}></i>
                  </div>
                  <div className="activity-description">
                    <span className="activity-action">{activity.action}</span>
                    <span className="activity-repo">{activity.repo}</span>
                    {activity.details && (
                      <span className="activity-details">({activity.details})</span>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="activity-footer">
                <span className="terminal-cursor">$</span> git log --oneline --graph
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 