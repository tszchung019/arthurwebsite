import React, { useState, useEffect } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports.js';
import BasicTabs from '../components/UserPortal.js';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import '../css/styles.css';
import Admin from '../components/Admin/index.js';

Amplify.configure(awsExports);

export default function SignUp() {
  return (
    <body>
      <NavLink className={'homeIcon'} to={"/"}><HomeIcon /></NavLink>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <div class="content">
              {user.getSignInUserSession().getAccessToken().payload['cognito:groups']=='Admin'? (
                <div>
                  <section>
                    <Heading level={2}>Welcome, administrator {user.username}!</Heading>
                  </section>
                  <Admin />
                </div>
              ) : (
                <section>
                  <h1>Hello {user.username}</h1>
                  <p>This is your portal for managing your projects with me. You can start a new project, ask for a quote, and manage the work schedule with existing projects</p>
                </section>
              )}
              <section id='userPortal'>
                <BasicTabs />
              </section>
              <button onClick={signOut}>Sign out</button>
            </div>
          </main>
        )}
      </Authenticator>
    </body>
  );
}
