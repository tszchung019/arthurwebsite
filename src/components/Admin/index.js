import React, { useState, useEffect } from "react";
import ManageBlogs from "./ManageBlogs";
import { Authenticator, Heading, Text } from '@aws-amplify/ui-react';
import BasicTabs from '../UserPortal.js';
import { Button } from '@mui/material';
export default function Admin() {
    return (
        <div>
            <Authenticator>
                {({ signOut, user }) => (
                <main>
                    <Button variant="text" sx={{position: 'absolute', top: '5px', right: '10px'}} onClick={signOut}>Sign out</Button>
                    <div className="container">
                        {user.getSignInUserSession().getAccessToken().payload['cognito:groups']=='Admin'? (
                            <div>
                            <section>
                                <Text>Welcome, administrator {user.username}!</Text>
                            </section>
                            <ManageBlogs />
                            </div>
                        ) : (
                            <section>
                            <h1>Hello {user.username}</h1>
                            <p>This is your portal for managing your projects with me. You can start a new project, ask for a quote, and manage the work schedule with existing projects</p>
                            </section>
                        )}
                        <div className="project-section">
                            <section id='userPortal'>
                            <BasicTabs
                                user={user.username}
                            />
                            </section>
                        </div>
                    </div>
                </main>
                )}
            </Authenticator>
        </div>
    );
}