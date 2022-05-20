import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Videos from "./Routes/Videos"
import Home from "./Routes/Home"
import AgentsList from "./Routes/AgentsList"
import 'typeface-roboto'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CallProgress from './Routes/CallProgress';
import AgentPage from './Routes/AgentPage';
import Survey from './Routes/Survey';
import VideoInfo from './Routes/VideoInfo';
const theme = createTheme({
  palette: {
    primary: {
      main: '#9FA8DA',
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home name="Charles R." id="1234"/>} />
        <Route path="videos" element={<Videos />} />
        <Route path="agents" element={<AgentsList />} />
        <Route path="progress" element={<CallProgress name="Charles R." id="1234"/>} />
        <Route path="agents/agent" element={<AgentPage />} />
        <Route path="survey" element={<Survey />} />
        <Route path = "videos/detail" element={<VideoInfo/>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//
reportWebVitals();
