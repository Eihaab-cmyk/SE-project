import React from "react";
import ReactDOM from 'react-dom'
import './index.css'

import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import reducer from "./context/reducer";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";

ReactDOM.render(
<Router>
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
</Router>, 
document.getElementById("root")
);
