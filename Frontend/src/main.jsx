import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // ✅ Ensure App.jsx exists
import "./App.css";
import "./main.css"; // ✅ Ensure App.css exists

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);





// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
