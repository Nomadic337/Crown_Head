import React from 'react'; 
import { Switch, Route, Redirect } from 'react-router-dom';  
import { connect } from 'react-redux';  
import { createStructuredSelector} from 'reselect'; 
import { checkUserSession } from './Redux/User/UserActions';
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
    const { checkUserSession } = this.props;
    checkUserSession();    
  
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
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
