import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);


// const citrus = ["Lime", "Lemon", "Orange"];
// const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

// const fullName = {
//   fName: "James",
//   lName: "Bond"
// };

// const user = {
//   ...fullName,
//   id: 1,
//   username: "jamesbond007"
// };

// console.log(user);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
