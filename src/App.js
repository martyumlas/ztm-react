import React, { Component, Fragment } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop'
import Header  from './components/header/Header';
import Auth from './pages/auth/Auth';
import {db, auth, createUserProfileDocument} from './firebase/firebase'
import {doc, onSnapshot} from 'firebase/firestore'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/Checkout';


class App extends Component {

  unSubscribeFromAuth = null

  componentDidMount() {
    // this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if(userAuth) {        
    //     await createUserProfileDocument(userAuth)

    //     const userRef = doc(db, "users", userAuth.uid)
    //     onSnapshot(userRef, (doc) => {
    //       this.props.setCurrentUser({
    //           id: doc.id,
    //           ...doc.data()
    //       })
    //     });
    //   } else {
    //     this.props.setCurrentUser(userAuth)
    //   }
     
    // })  
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
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
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
 