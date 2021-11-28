import React, { Component, Fragment } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop'
import Header  from './components/header/Header';
import Auth from './pages/auth/Auth';
import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/Checkout';
import { checkUserSession } from './redux/user/user.actions';


class App extends Component {

  componentDidMount() {
    const {checkUserSession} = this.props

    checkUserSession()
  }

  render() {    
    return (
      <Fragment>
        <Header />
          <Routes>
            <Route path='/' element={<Homepage/>}/>      
            <Route path='shop/*' element={<Shop/>}/>        
            <Route path='checkout' element={<Checkout />} />
            <Route exact path='signin' element={this.props.currentUser ? <Navigate to='/' /> : <Auth/>}/>
          </Routes>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
 