import { useState, useCallback } from "react";
import { BarChart2, MessageSquare, RefreshCcw, Heart, Share, Bookmark, X } from "lucide-react";
import './TweetEngagement.css';  // Import the CSS file

const useButtonInteraction = (activeColor, defaultColor = '#8899a6') => {
  return useCallback((e) => {
    const target = e.currentTarget;
    const isActive = target.getAttribute('data-active') === 'true';
    
    return {
      onMouseEnter: () => target.style.color = activeColor,
      onMouseLeave: () => target.style.color = isActive ? activeColor : defaultColor,
      onMouseDown: () => target.style.transform = 'scale(0.95)',
      onMouseUp: () => target.style.transform = 'scale(1)',
    };
  }, [activeColor, defaultColor]);
};

export default function TweetEngagement() {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareDropdown, setShowShareDropdown] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [showViewsModal, setShowViewsModal] = useState(false);

  const [likes, setLikes] = useState(Math.floor(Math.random() * 900) + 100);
  const [retweets, setRetweets] = useState(Math.floor(Math.random() * 900) + 100);
  const [comments] = useState(Math.floor(Math.random() * 1000) + 100);
  const [views] = useState(Math.floor(Math.random() * 1000) + 100);

  const handleLike = useCallback(() => {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  }, [isLiked]);

  const handleRetweet = useCallback(() => {
    setIsRetweeted((prev) => !prev);
    setRetweets((prev) => (isRetweeted ? prev - 1 : prev + 1));
  }, [isRetweeted]);

  const handleViewClick = useCallback(() => {
    setShowViewsModal(true);
  }, []);

  const handleCommentClick = useCallback(() => {
    setShowReplyModal(true);
  }, []);

  const handleBookmark = useCallback(() => {
    setIsBookmarked((prev) => !prev);
  }, []);

  const handleShareClick = useCallback(() => {
    setShowShareDropdown((prev) => !prev);
  }, []);

  const useCommentInteraction = useButtonInteraction('#1da1f2');
  const useRetweetInteraction = useButtonInteraction('#00ba7c');
  const useLikeInteraction = useButtonInteraction('#f91880');
  const useViewInteraction = useButtonInteraction('#1da1f2');
  const useShareInteraction = useButtonInteraction('#1da1f2');
  const useBookmarkInteraction = useButtonInteraction('#1da1f2');

  return (
    <div className="container">
      <div className="engagement-bar">
        <button 
          id="comments"
          onClick={handleCommentClick} 
          className="button"
          {...useCommentInteraction}
          aria-label="Comment"
        >
          <MessageSquare className="icon" />
          <span >{comments}</span>
        </button>

        <button 
          id="retweets"
          onClick={handleRetweet}
          className={`button ${isRetweeted ? 'active-retweet' : ''}`}
          {...useRetweetInteraction}
          data-active={isRetweeted}
          aria-label="Retweet"
        >
          <RefreshCcw className="icon" />
          <span >{retweets >= 1000 ? `${(retweets / 1000).toFixed(1)}K` : retweets}</span>
        </button>

        <button 
          id="likes"
          onClick={handleLike}
          className={`button ${isLiked ? 'active-like' : ''}`}
          {...useLikeInteraction}
          data-active={isLiked}
          aria-label="Like"
        >
          <Heart className="icon" />
          <span>{likes >= 1000 ? `${(likes / 1000).toFixed(1)}K` : likes}</span>
        </button>

        <button 
          id="views"
          onClick={handleViewClick} 
          className="button"
          {...useViewInteraction}
          aria-label="View analytics"
        >
          <BarChart2 className="icon" />
          <span>{views}K</span>
        </button>

        <div className="share-container">
          <button 
            onClick={handleShareClick} 
            className="button"
            {...useShareInteraction}
            aria-label="Share"
          >
            <Share className="icon" />
          </button>
          {showShareDropdown && (
            <div className="dropdown">
              <a href="#" className="dropdown-item">Copy link</a>
              <a href="#" className="dropdown-item">Share post via...</a>
              <a href="#" className="dropdown-item">Send via Direct Message</a>
            </div>
          )}
        </div>

        <button 
          id="bookmark"
          onClick={handleBookmark}
          className={`button ${isBookmarked ? 'active-bookmark' : ''}`}
          {...useBookmarkInteraction}
          data-active={isBookmarked}
          aria-label="Bookmark"
        >
          <Bookmark className="icon"/>
        </button>
      </div>

      {showReplyModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Reply</h2>
              <button onClick={() => setShowReplyModal(false)} className="close-button">
                <X className="icon" />
              </button>
            </div>
            <textarea className="textarea" rows={4} placeholder="Post your reply"></textarea>
            <button className="button-blue">Reply</button>
          </div>
        </div>
      )}

      {showViewsModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Views</h2>
              <button onClick={() => setShowViewsModal(false)} className="close-button">
                <X className="icon" />
              </button>
            </div>
            <p>Times this post was seen. To learn more, visit the Help Center.</p>
            <button className="button-gray">Dismiss</button>
          </div>
        </div>
      )}
    </div>
  );
}