
import React from "react";
import Calendar from "calendar-reactjs";

import UserLogin from "./Components/Parent";
import AttendanceList from "./Components/User";
import AttendanceForm from "./Components/User";
import AttendanceMarker from "./Components/User";
import Attendance from "./Components/openai";
import Navbar1 from "./Components/Navbar";
import Openai2 from "./Components/Openai2";
import Openai3 from "./Components/Openai3";
import Openai4 from "./Components/Openai4";
import Openai5 from "./Components/Openai5";

const App = () => {
  return (
<div>
{/* <UserLogin/>
<AttendanceForm /> */}
{/* <AttendanceMarker /> */}
<Navbar1/>
<Attendance />
<Openai2/>
<Openai3/>
<Openai4/>
<Openai5/>

</div>


  );
  }
  
export default App;
