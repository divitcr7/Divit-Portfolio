import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GitHubCalendar.css';

export default function GitHubStats() {
  const [contributionData, setContributionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContributionData();
  }, []);

  const fetchContributionData = async () => {
    try {
      setLoading(true);
      // Fetch user data and repository information
      const userResponse = await axios.get('https://api.github.com/users/divitcr7');
      const reposResponse = await axios.get('https://api.github.com/users/divitcr7/repos?per_page=100&sort=updated');
      
      // Calculate some contribution metrics
      const userData = userResponse.data;
      const repositories = reposResponse.data;
      
      const stats = {
        totalRepos: userData.public_repos,
        totalFollowers: userData.followers,
        totalStars: repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0),
        totalForks: repositories.reduce((sum, repo) => sum + repo.forks_count, 0),
        languages: getTopLanguages(repositories)
      };
      
      setContributionData(stats);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      setError('Failed to load GitHub data');
      setLoading(false);
    }
  };

  const getTopLanguages = (repos) => {
    const langCount = {};
    repos.forEach(repo => {
      if (repo.language) {
        langCount[repo.language] = (langCount[repo.language] || 0) + 1;
      }
    });
    
    return Object.entries(langCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 6)
      .map(([lang, count]) => ({ name: lang, count }));
  };

  if (loading) {
    return (
      <div className="github-stats-container">
        <div className="stats-header">
          <h2>
            <i className="bi bi-github"></i>
            GitHub Statistics
          </h2>
          <span className="stats-subtitle">Loading GitHub data...</span>
        </div>
        
        <div className="stats-loading">
          <div className="loading-skeleton">
            <div className="skeleton-row"></div>
            <div className="skeleton-row"></div>
            <div className="skeleton-row"></div>
            <div className="skeleton-row"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-stats-container">
        <div className="stats-header">
          <h2>
            <i className="bi bi-github"></i>
            GitHub Statistics
          </h2>
        </div>
        
        <div className="stats-error">
          <i className="bi bi-exclamation-triangle"></i>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="github-stats-container">
      <div className="stats-header">
        <h2>
          <i className="bi bi-github"></i>
          GitHub Statistics
        </h2>
        <span className="stats-subtitle">Development metrics and language breakdown</span>
      </div>
      
      <div className="github-stats-grid">
        <div className="stat-card">
          <div className="stat-number">{contributionData?.totalRepos || 0}</div>
          <div className="stat-label">Repositories</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{contributionData?.totalStars || 0}</div>
          <div className="stat-label">Stars Earned</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{contributionData?.totalForks || 0}</div>
          <div className="stat-label">Forks</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{contributionData?.totalFollowers || 0}</div>
          <div className="stat-label">Followers</div>
        </div>
      </div>

      <div className="languages-section">
        <h3>Programming Languages</h3>
        <div className="languages-grid">
          {contributionData?.languages?.map((lang, index) => (
            <div key={index} className="language-card">
              <div className="language-name">{lang.name}</div>
              <div className="language-count">{lang.count} repos</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="stats-footer">
        <span className="terminal-text">
          <span className="terminal-cursor">$</span> git --version && echo "Developer since 2019"
        </span>
      </div>
    </div>
  );
} 