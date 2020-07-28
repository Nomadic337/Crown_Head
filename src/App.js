import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; 
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils'; 
import { connect } from 'react-redux'; 
import { setCurrentUser } from './Redux/User/UserActions'; 
import { createStructuredSelector} from 'reselect';
import { selectCurrentUser } from './Redux/User/UserSelector';
import HomePage from './Pages/HomePage/HomePage'; 
import ShopPage from './Pages/Shop/ShopPage'; 
import Header from './Component/Header/Header'; 
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import SignInAndSignUpPage from './Pages/Sign-In-Out/Sign-In-Out'; 
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
      setCurrentUser(userAuth);
  
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
          <Route exact path='/checkout' component={ CheckoutPage } />
          <Route 
            exact 
            path='/signin' 
            render={() => this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            } 
          />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect( 
  mapStateToProps,
  mapDispatchToProps
  )(App);
