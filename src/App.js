import React from 'react';
import Header from './components/Header';
import LeftNavigation from './components/LeftNavigation';
import MainContent from './components/MainContent';
import RightChat from './components/RightChat';
import Footer from './components/Footer';
import SearchOverlay from './components/SearchOverlay';

import './css/themify-icons.css';
import './css/feather.css';
import './css/style.css';

const App = () => {
  return (
    <div className="color-theme-blue mont-font">
      <div className="preloader"></div>
      <div className="main-wrapper">
        <Header />
        <LeftNavigation />
        <MainContent />
        <RightChat />
        <Footer />
        <SearchOverlay />
      </div>
    </div>
  );
};

export default App;