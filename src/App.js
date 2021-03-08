import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import SideMenu from './View/Sidemenu'
import Resi from './Components/Resi'
import User from './Components/User'
import Uploadresi from './Components/Uploadresi'
import { Switch, Route } from 'react-router-dom'
import Cookies from 'js-cookie'


function App() {
  const [token, settoken] = useState("")
  const tokenCook = Cookies.get('token')

  useEffect(() => {
    console.log(tokenCook);
    settoken(tokenCook)
  }, [])

  useEffect(()=> {
    if(!tokenCook) {
      settoken(tokenCook)
    }
  })

  return (
    <>
      <div className="thebody">
        {
          token?
          < SideMenu />
          :
          null
        }
        <Switch >
          <Route exact path='/' component={Resi} />
          <Route exact path='/user' component={User} />
          <Route exact path='/upload' component={Uploadresi} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </div >
    </>
  );
}

export default App;