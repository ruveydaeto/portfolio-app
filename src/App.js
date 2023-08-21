import './App.css';
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';

import Contact from './components/contact/Contact';

function App() {
  return (
<>
<Sidebar/>
<main className='main'>
<Home/>


{/* <About/> */}
{/* <Services/> */}
{/* <Resume/> */}
<Portfolio/>

<Contact/>


</main>
</>
  );
}

export default App;
