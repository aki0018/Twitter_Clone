import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTweets([...tweets, message]);
    setMessage("");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="container">
      <h1>Twitter Clone</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's happening?"
          value={message}
          onChange={handleChange}
        />
        <button type="submit">Tweet</button>
      </form>
      <ul className="tweets">
        {tweets.map((tweet, index) => (
          <li key={index}>{tweet}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;