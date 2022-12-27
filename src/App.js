import React from 'react';
import AdminAttendence from './components/AdminAttendence';
import './App.css';

import Parent from './components/Parent';
import { Footer } from './components/UserFooter'



function App() {
  return (
    <div>
      <div className='myApp'>
        {/* <UserLogin /> */}
          <Parent />
        <Footer />
        <AdminAttendence/>
      </div>
    </div>
  );
}
export default App;
