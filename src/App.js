import React, { useState } from 'react';
import './App.css';
import pfpic from './images/temp-profile.jpeg';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";


function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alex", age: 25, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Enjoys mountain biking and coding late at night.", distance: "2 miles", year: "Sophomore", price: "$200" },
    { id: 2, name: "Jordan", age: 30, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Loves tea and walks in the rain.", distance: "5 miles", year: "Junior", price: "$350" },
    { id: 3, name: "Casey", age: 22, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Coffee enthusiast, avid reader.", distance: "1 mile", year: "Senior", price: "$150" },
    { id: 4, name: "Taylor", age: 28, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Gamer, music lover, and foodie.", distance: "3 miles", year: "Freshman", price: "$250" },
    { id: 5, name: "Jamie", age: 26, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Passionate about fitness and veganism.", distance: "2 miles", year: "Graduate", price: "$300" },
    { id: 6, name: "Morgan", age: 24, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Digital artist who loves horror movies.", distance: "3 miles", year: "Sophomore", price: "$180" },
    { id: 7, name: "Chris", age: 29, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Avid rock climber and photographer.", distance: "4 miles", year: "Senior", price: "$400" },
    { id: 8, name: "Pat", age: 27, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Loves traveling and trying new foods.", distance: "2 miles", year: "Junior", price: "$200" },
    { id: 9, name: "Terry", age: 22, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Studies philosophy, loves chess.", distance: "1 mile", year: "Freshman", price: "$100" },
    { id: 10, name: "Sam", age: 30, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Tech enthusiast and drone pilot.", distance: "5 miles", year: "Graduate", price: "$350" },
    { id: 11, name: "Alexa", age: 23, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Enjoys yoga and sunny beaches.", distance: "3 miles", year: "Senior", price: "$210" },
    { id: 12, name: "Billie", age: 22, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Singer-songwriter and guitarist.", distance: "2 miles", year: "Sophomore", price: "$150" },
    { id: 13, name: "Charlie", age: 26, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Graphic designer, coffee lover.", distance: "3 miles", year: "Senior", price: "$230" },
    { id: 14, name: "Dana", age: 28, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Aspiring novelist, enjoys long walks.", distance: "4 miles", year: "Junior", price: "$320" },
    { id: 15, name: "Eli", age: 25, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Cybersecurity expert, puzzle solver.", distance: "2 miles", year: "Sophomore", price: "$190" },
    { id: 16, name: "Frank", age: 30, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Fitness coach, wellness enthusiast.", distance: "1 mile", year: "Graduate", price: "$400" },
    { id: 17, name: "Georgia", age: 22, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Wine connoisseur, history buff.", distance: "5 miles", year: "Senior", price: "$360" },
    { id: 18, name: "Haley", age: 27, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Marketing guru, social media expert.", distance: "3 miles", year: "Junior", price: "$300" },
    { id: 19, name: "Ivan", age: 24, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Manga artist, video game aficionado.", distance: "2 miles", year: "Sophomore", price: "$210" },
    { id: 20, name: "Jade", age: 26, imageUrl: "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg", bio: "Environmental scientist, nature explorer.", distance: "1 mile", year: "Graduate", price: "$250" }
  ]);

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDEzn8zfcErNanRckRKwHBuf-s115lsikQ",
    authDomain: "roomie-cd48d.firebaseapp.com",
    projectId: "roomie-cd48d",
    storageBucket: "roomie-cd48d.appspot.com",
    messagingSenderId: "535168404182",
    appId: "1:535168404182:web:7461af8972a5fd4c795777",
    measurementId: "G-JFJZJTMHZ6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
      <div className="nav-bar">
        <div className="nav-title">Campus Roommate Finder</div>
        <div className="nav-menu" onClick={toggleMenu}>
          <div className={`menu-btn ${menuOpen ? 'open' : ''}`}>
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="profile-list">
          {users.map(user => (
            <div key={user.id} className="profile-card" onClick={() => selectUser(user)}>
              <img src={user.imageUrl} alt={user.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
              <h3>{user.name}, {user.year}</h3>
              <p>{user.bio}</p>
              <p>{user.distance} away, Budget: {user.price}</p>
            </div>
          ))}
        </div>
        <div className="profile-description">
          <h2>{selectedUser.name}, {selectedUser.year}</h2>
          <p>{selectedUser.bio}</p>
          <p>Distance from campus: {selectedUser.distance}</p>
          <p>Price Limit: {selectedUser.price}</p>
          <div className="action-buttons">
          <button className="reject-btn">❌</button>
            <button className="accept-btn">✔️</button>
             </div>
        </div>
      </div>
    </div>
  );
}

export default App;
