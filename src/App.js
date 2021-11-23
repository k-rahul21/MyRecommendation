import React, { useState } from "react";
import "./styles.css";

const recommendation = {
  Podcast: [
    {
      name: "Naval",
      creator: "Naval Ravikant",
      rating: "4.5",
      link:
        "https://open.spotify.com/show/7qZAVw03FuurfYnWIWwkHY?si=NLWAG5ihQuWJ6yt54HFpPg&utm_source=copy-link&dl_branch=1"
    },
    {
      name: "On Purpose with Jay Sheety",
      creator: "Jay Sheety",
      rating: "4.2",
      link:
        "https://open.spotify.com/show/5EqqB52m2bsr4k1Ii7sStc?si=IwHpD1EKS8KDOZskH5de9w&utm_source=copy-link&dl_branch=1"
    },
    {
      name: "The School of Greatness",
      creator: "Lewis Howes",
      rating: "4.4",
      link:
        "https://open.spotify.com/show/07GQhOZboEZOE1ysnFLipT?si=4q9XXmOYRwq99vepcgY1ZA&utm_source=copy-link&dl_branch=1"
    },
    {
      name: "The Ranveer Show",
      creator: "Ranveer Allahbadia",
      rating: "4.0",
      link:
        "https://open.spotify.com/show/6ZcvVBPQ2ToLXEWVbaw59P?si=7OgZchoJQwWRkSWU2Azf9g&utm_source=copy-link&dl_branch=1"
    }
  ],
  Sprituality: [
    {
      name: "Gaur Gopal Das",
      creator: "Gaur Gopal Das",
      rating: "4.5",
      link: "https://www.youtube.com/c/GaurGopalDas"
    },
    {
      name: "Sadhguru",
      creator: "Sadhguru",
      rating: "4.5",
      link: "https://www.youtube.com/c/sadhguru"
    },
    {
      name: "DandapaniLLC",
      creator: "Danaapani",
      rating: "4.1",
      link: "https://www.youtube.com/user/DandapaniLLC"
    }
  ],
  Tech: [
    {
      name: "neogcamp",
      creator: "Tanay Pratap",
      rating: "4.9",
      link: "https://www.youtube.com/c/TanayPratap"
    },
    {
      name: "Akshay Saini",
      creator: "Akshay Saini",
      rating: "4.7",
      link: "https://www.youtube.com/c/akshaymarch7"
    },
    {
      name: "Gaurav Sen",
      creator: "Gaurav Sen",
      rating: "4.5",
      link: "https://www.youtube.com/c/GauravSensei"
    },
    {
      name: "Kunal Kushwaha",
      creator: "Kunal Kushwaha",
      rating: "4.5",
      link: "https://www.youtube.com/c/KunalKushwaha"
    }
  ]
};

const recommendationData = Object.keys(recommendation);

export default function App() {
  const [showRecommend, setRecommendation] = useState("Tech");

  function clickHandler(topic) {
    setRecommendation(topic);
  }
  return (
    <div className="App">
      <div className="header">
        <h1 style={{ color: "#F59E0B" }}>Hey Consumer</h1>
        <p style={{ color: "#fbbf24" }}>
          What We Consume Determines The Lives We Live.
        </p>
        <p style={{ color: "#FBBF24" }}>
          So, follow the right peeps to expand your knowledge.
        </p>
        <hr style={{ borderColor: "#F59E0B", width: "70vw" }}></hr>
      </div>
      <div className="btn-class">
        {recommendationData.map((topic) => (
          <button onClick={() => clickHandler(topic)}> {topic} </button>
        ))}
      </div>
      <ul className="unorderedList">
        {recommendation[showRecommend].map((myRecommend) => (
          <div className="topic">
            <li className="list">
              <div className="container">
                <h3>{myRecommend.name}</h3>
                <h4>Creator: {myRecommend.creator}</h4>
                <h4>Rating: {myRecommend.rating}</h4>
                <a href={myRecommend.link}>Follow</a>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
