// import './App.css';
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./components/MyRoutes";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans"
  },
});



function App() {

  const [stud, setStud] = useState({ name : "owais",
  address: {
  flatNo: 25,
  pincode :452016
}})
  return (
  <ThemeProvider theme={theme}>
    <Router>
      <MyRoutes stud={stud} />
    </Router>
    </ThemeProvider>
  );
}

export default App;
