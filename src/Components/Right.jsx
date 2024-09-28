import { Search } from 'lucide-react';

function Right() {
  return (
    <div className="right-container">
      <div className="search-bar">
        <Search size={20} className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="subscribe-section">
        <h2>Subscribe to Premium</h2>
        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className="subscribe-button">Subscribe</button>
      </div>
      <div className="whats-happening">
        <h2>What&lsquo;s happening</h2>
        <div className="trending-topic">
          <span className="topic-category">Music Festival · LIVE</span>
          <h3>Portola Festival 2024</h3>
        </div>
      </div>
      <div className="who-to-follow">
        <h2>Who to follow</h2>
        <div className="follow-suggestion">
          <img src="/placeholder.svg" alt="User avatar" className="user-avatar" />
          <div className="user-info">
            <h3>Anika Pandey</h3>
            <span>@Anika_Pan</span>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Right;