import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import RegisterMember from '../components/RegisterMember';
import RegisterAdmin from '../components/RegisterAdmin';
import AboutUs from '../components/AboutUs';

const activeLinks = {
    color: 'red',
    fontSize: '20px'
}
const Header = () => {
    return(
        <div>
            <NavLink to='/' activeClassName={'activeLinks'}>Dashboard</NavLink>
            <NavLink to='/registerMember' activeClassName={'activeLinks'}>Register Member</NavLink>
            <NavLink to='/registerAdmin' activeClassName={'activeLinks'}>Register Admin</NavLink>
            <NavLink to='/aboutus' activeClassName={'activeLinks'}>About Us</NavLink> 
        </div>
    )
}
class AppRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact={true}/>
                    <Route path="/registerMember" component={RegisterMember} />
                    <Route path="/registerAdmin" component={RegisterAdmin} />
                    <Route path="/aboutus" component={AboutUs} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;