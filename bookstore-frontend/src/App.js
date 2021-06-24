import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import PageNotFound from "./components/page-not-found/page-not-found.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/signin-signup-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  constructor() {
    super();
    this.unSubscribedAuthUser = null;
  }

  componentDidMount() {
    this.unSubscribedAuthUser = auth.onAuthStateChanged(async (authUser) => {
      const userRef = await createUserProfileDocument(authUser);
      if (userRef) {
        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      this.props.setCurrentUser(null);
    });
  }

  componentWillUnmount() {
    this.unSubscribedAuthUser();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/page-not-found" component={PageNotFound} />
          <Route path="/sign-in" component={SignInSignUpPage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/" component={Homepage} />
          <Redirect to="/page-not-found" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
