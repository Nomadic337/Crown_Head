import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import Header from './Component/Header/Header';
import SignInAndSignUpPage from './Pages/Sign-In-Out/Sign-In-Out';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/UserActions';
import './App.css';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
        setCurrentUser({currentUser: userAuth});
  
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />    
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route path='/signin' component={ SignInAndSignUpPage } />
        </Switch>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
