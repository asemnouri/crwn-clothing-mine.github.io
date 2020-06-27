import React from 'react';
import HomePage from './components/homePage/homePage'
import {Route , Switch ,  BrowserRouter,Redirect} from 'react-router-dom'
import './App.css';
import ShopPage from './pages/shopPage/shopPage'
import Header from './components/header/header'
import SignInUp from './pages/shopPage/sign-in-up/sign-in-up'
import CheckoutPage from './pages/checkout/checkout'
import {auth, createUserProfileDocument} from '../src/firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect';


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
        this.props.setCurrentUser({//storing data in the state
          currentUser:{
            id:snapshot.id,//we use it to get the id, because it doesnt exist in the snapshot.data()
            ...snapshot.data()
          }
        })
       
      });
    }
    else{
      this.props.setCurrentUser(userAuth)//returns null alwayas
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
    <Header />
    <Switch>
      <Route exact path='/'component={HomePage}/>
      <Route exact path='/shop'component={ShopPage}/>
      <Route exact path='/signin'render={()=>this.props.currentUser?(<Redirect to='/'/>):<SignInUp/>}/>
      <Route exact path='/checkout'component={CheckoutPage}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}

const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser,
  });

const mapDispatchToProps=(dispatch)=>({
  setCurrentUser: (user)=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
