import React, { useState, useEffect, Component } from "react";
import ManageBlogs from "./ManageBlogs";
import { withAuthenticator, Text } from '@aws-amplify/ui-react';
import { fetchAuthSession } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';
import BasicTabs from '../UserPortal.js';
import { Button } from '@mui/material';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group:'',
            username:''
        };
    }
    async componentDidMount() {
        const { tokens } = await fetchAuthSession();
        const { username } = await getCurrentUser();
        const groupname = tokens.accessToken.payload["cognito:groups"][0]
        this.setState({ group:groupname, username: username });
    }
    render() {
        const { group, username }= this.state
        if (/^Admin$/i.test(group))
            return (
                <main>
                    <div className="container">
                        <div>
                            <section>
                                <Text>Welcome, administrator {username}!</Text>
                            </section>
                            <ManageBlogs />
                        </div>
                        <div className="project-section">
                            <section id='userPortal'>
                            <BasicTabs
                                user={username}
                            />
                            </section>
                        </div>
                    </div>
                </main>
            )
        else
            return (
                <main>
                    <div className="container">
                        <section>
                            <h1>Hello {username}</h1>
                            <p>This is your portal for managing your projects with me. You can start a new project, ask for a quote, and manage the work schedule with existing projects</p>
                        </section>
                        <div className="project-section">
                            <section id='userPortal'>
                            <BasicTabs
                                user={username}
                            />
                            </section>
                        </div>
                    </div>
                </main>
            )
    }
}

export default withAuthenticator(Admin, { hideSignUp: true });