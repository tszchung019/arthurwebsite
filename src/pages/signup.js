import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports.js';
import BasicTabs from '../components/UserPortal.js';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import '../css/styles.css';
import Admin from '../components/Admin/index.js';
import { Button } from '@mui/material';

Amplify.configure(awsExports);

export default function SignUp() {
  return (
    <body>
      <NavLink className={'homeIcon'} to={"/"}><HomeIcon /></NavLink>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <Button variant="text" sx={{position: 'absolute', top: '5px', right: '10px'}} onClick={signOut}>Sign out</Button>
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
            </div>
          </main>
        )}
      </Authenticator>
    </body>
  );
}
