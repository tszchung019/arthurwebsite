import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports.js';
import BasicTabs from '../components/UserPortal.js';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
            <div class="content">
                <h1>Hello {user.username}</h1>
                <section>
                    <p>This is your portal for managing your projects with me. You can start a new project, ask for a quote, and manage the work schedule with existing projects</p>
                </section>
                <section id='userPortal'>
                  <BasicTabs />
                </section>
                <button onClick={signOut}>Sign out</button>
            </div>
        </main>
      )}
    </Authenticator>
  );
}