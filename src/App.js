import React from 'react'
import{BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navigation from './navigation'
import AddData from './pages/AddData'
import ShowData from './pages/showData'
import "./css/style.css"

const App = () => {
    return (
        <>
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={AddData}></Route>
                <Route path="/show" component={ShowData}></Route>
            </Switch>
        </Router>


        </>
    )
}

export default App
