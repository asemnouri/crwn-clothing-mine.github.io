import React from 'react';
import HomePage from './components/homePage/homePage'
import {Route , Switch ,  BrowserRouter} from 'react-router-dom'
import './App.css';
import ShopPage from './pages/shopPage/shopPage'
import Header from './components/header/header'
import SignInUp from './pages/shopPage/sign-in-up/sign-in-up'
import {auth, createUserProfileDocument} from '../src/firebase/firebase.utils'


class App extends React.Component {
constructor(){
  super()
this.state={
  currentUser:null
}
}

unsubscribeFromAuth=null

componentDidMount(){
  this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
    if(userAuth){
      const userRef=await createUserProfileDocument(userAuth) //userRef we got it from the config
      userRef.onSnapshot(snapshot=>{//same as onAuthStateChanged (used insted of get())
        this.setState({//storing data in the state
          currentUser:{
            id:snapshot.id,//we use it to get the id, because it doesnt exist in the snapshot.data()
            ...snapshot.data()
          }
        },()=>{ console.log(this.state)})
       
      });
    }
    else{
      this.setState({currentUser:userAuth})//returns null alwayas
      console.log(this.state)
    }
    
    // createUserProfileDocument(user)
    // this.setState({currentUser:user})
  })
  }
componentWillUnmount(){
  this.unsubscribeFromAuth()
}


  render(){
  return (
    <BrowserRouter>
    <div className="App"> 
    <Header currentUser={this.state.currentUser}/>
    <Switch>
      <Route exact path='/'component={HomePage}/>
      <Route exact path='/shop'component={ShopPage}/>
      <Route exact path='/signin'component={SignInUp}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
