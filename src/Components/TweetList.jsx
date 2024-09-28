import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TweetEngagement from "./TweetEngagement";

// Simulating JSON data
const tweetData = [
  {
    id: 1,
    avatar: "https://i.pinimg.com/736x/39/ee/71/39ee71e4564d0a40f6c9ee4e41c7fcad.jpg",
    name: "Lora",
    username: "@misslora",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  },
  {
    id: 2,
    avatar: "https://i.pinimg.com/736x/39/ee/71/39ee71e4564d0a40f6c9ee4e41c7fcad.jpg",
    name: "Lora",
    username: "@misslora",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    image: "https://pixlr.com/images/generator/how-to-generate.webp"
  },
  {
    id: 3,
    avatar: "https://i.pinimg.com/736x/39/ee/71/39ee71e4564d0a40f6c9ee4e41c7fcad.jpg",
    name: "Lora",
    username: "@misslora",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    image: "https://th.bing.com/th/id/OIG2.9O4YqGf98tiYzjKDvg7L"
  },
  {
    id: 4,
    avatar: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    name: "Lora",
    username: "@misslora",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    image: "https://images.ctfassets.net/kftzwdyauwt9/6Hpmny9K2Z8Xxget5bmlWa/66634b4c69faef5600e5ea48f499ba5e/Anastronautridingahorseinaphotorealisticstyle6.jpg?w=3840&q=90&fm=webp"
  },
  {
    id: 5,
    avatar: "https://i.pinimg.com/736x/39/ee/71/39ee71e4564d0a40f6c9ee4e41c7fcad.jpg",
    name: "Lora",
    username: "@misslora",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    image: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
  },
  {
    id: 6,
    avatar: "https://i.pinimg.com/736x/39/ee/71/39ee71e4564d0a40f6c9ee4e41c7fcad.jpg",
    name: "Lora",
    username: "@misslora",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    image: "https://images.unsplash.com/photo-1522590482740-d2f7f4240b35?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlZXBlcmJhaG58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 7,
    avatar: "https://i.pinimg.com/736x/39/ee/71/39ee71e4564d0a40f6c9ee4e41c7fcad.jpg",
    name: "Lora",
    username: "@misslora",
    time: "6h",
    text: "A Ferrari tire explodes while the car hits top speed😳",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnLvrdFZ6ugsH_abvcv621c-lBJ_flYOm8g&s"
  }
];

// Utility function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap
  }
  return array;
}

function TweetList() {
  const [tweets, setTweets] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

  // Simulate fetching data
  useEffect(() => {
    const fetchTweets = () => {
      setTimeout(() => {
        const shuffledTweets = shuffleArray([...tweetData]); // Shuffle tweets
        setTweets(shuffledTweets); // Simulate API fetching
      }, 1000); // Simulate a 1-second loading time
    };

    fetchTweets();
  }, []);

  const handleImageLoaded = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div>
      <ul className="tweet-list">
        {tweets.map((tweet) => (
          <li key={tweet.id} className="tweet-item">
            <img
              className="tweet-avatar"
              src={tweet.avatar}
              alt={`${tweet.name}'s avatar`}
            />
            <div className="tweet-content">
              <div className="tweet-header">
                <span className="tweet-name">{tweet.name}</span>
                <span className="tweet-username">{tweet.username}</span>
                <span className="tweet-time">· {tweet.time}</span>
              </div>
              <p className="tweet-text">{tweet.text}</p>

              {/* Spinner until the image is loaded */}
              {!loadedImages[tweet.id] && (
                <motion.div
                  className="spinner"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <svg
                    className="animate-spin h-5 w-5 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                </motion.div>
              )}

              <img
                className="tweet-image"
                src={tweet.image}
                alt="Tweet visual"
                onLoad={() => handleImageLoaded(tweet.id)}
                style={{ display: loadedImages[tweet.id] ? "block" : "none" }}
              />

              <TweetEngagement />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TweetList;
