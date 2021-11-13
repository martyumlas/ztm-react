import React, { Component, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop'
import Header  from './components/header/Header';
import Auth from './pages/auth/Auth';
import {db, auth, createUserProfileDocument} from './firebase/firebase'
import {doc, onSnapshot} from 'firebase/firestore'


class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: null,
      test: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        
        await createUserProfileDocument(userAuth)

        onSnapshot(doc(db, "users", userAuth.uid), (doc) => {
          this.setState({
            currentUser: {
              id: doc.id,
              ...doc.data()
            }
          })
        });

        console.log(userAuth)
      } else {
        this.setState({currentUser: userAuth})
      }
     
    })  
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
    this.setState({test: 'unmount'})
  }

  render() {    
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser}/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='signin' element={<Auth/>}/>
          </Routes>
      </Fragment>
    );
  }
}

export default App;
