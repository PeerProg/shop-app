import React, { Fragment } from 'react';
// import FacebookLogin from 'react-facebook-login';
import InstagramLogin from 'react-instagram-login';
// import styles from './Cart.module.scss';

const ComponentClicked = (response) => (<div>Cart page</div>);

const CartPage = () => {
  
  const ResponseInstagram = (response) => {
    console.log('Na error');
    console.log(response);
  }
  
    return (<Fragment>

      {/* <FacebookLogin
        appId="1546779488994882"
        autoLoad={true}
        fields="name,email,picture"
        onClick={ComponentClicked}
        callback={responseFacebook}
        /> */}
        <InstagramLogin
          clientId=""
          buttonText="Login"
          onSuccess={ComponentClicked}
          onFailure={() => console.log('error')}
  />
    </Fragment>
    );
};

export default CartPage;
