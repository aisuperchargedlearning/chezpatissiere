import React from 'react';
import HeroChezLolo from './components/HeroChezLolo';
import SectionMyStory from './components/SectionMyStory';
import SectionOrderOnline from './components/SectionOrderOnline';
import SectionContactUs from './components/SectionContactUs';

function App() {
  return (
    <div className="min-h-screen">
      <HeroChezLolo />
      <SectionMyStory />
      <SectionOrderOnline />
      <SectionContactUs />
    </div>
  );
}

export default App;