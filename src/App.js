import React from 'react';
import './App.css';
import UserLogin from './components/Adminlogin';
import Parent from './components/Parent';
import { Footer } from './components/UserFooter'



function App() {
  return (
    <div>
      <div className='myApp'>
        {/* <UserLogin /> */}
          <Parent />
        <Footer />
      </div>
    </div>
  );
}
export default App;
