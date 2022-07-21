import React from "react";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Header from "./HomePage/Header";
import Sidebar from "./HomePage/Sidebar";
import Notification from "./HomePage/Notification";
import Message from "./HomePage/Message";
import MainBody from "./HomePage/MainBody";
import Leaderboard from "./HomePage/Leaderboard";
import Footer from "./Footer/Footer";

function App() {
  const [body, setBody] = React.useState(<MainBody />);

  return (
    <div>
      <Navbar
        homeClicked={() => setBody((prevBody) => <MainBody />)}
        leaderboardClicked={() => setBody((prevBody) => <Leaderboard />)}
        notificationClicked={() => setBody((prevBody) => <Notification />)}
        messageClicked={() => setBody((prevBody) => <Message />)}
      />
      <Header />
      <Sidebar />
      {body}
      <Footer />
    </div>
  );
}

export default App;
