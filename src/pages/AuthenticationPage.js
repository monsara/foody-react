import React from 'react';

import Authentication from '../components/Authentication/Authentication';
import SignIn from '../components/Authentication/SignIn';
import SignUp from '../components/Authentication/SignUp';

const AuthenticationPage = () => (
  <div>
    <Authentication items={[<SignIn />, <SignUp />]} />
  </div>
);

export default AuthenticationPage;
