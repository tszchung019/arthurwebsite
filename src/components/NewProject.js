import React, { useState, useEffect } from "react";

import {
    Button,
    Flex,
    Heading,
    Text,
    TextField,
    View,
    Link,
  } from "@aws-amplify/ui-react";

import { generateClient } from 'aws-amplify/api';
import {
  getUser as getUserQuery,
  listUsers as listUsersQuery,
} from "../graphql/queries"
import {
  createUser as createUserMutation,
  createProject as createProjectMutation,
} from "../graphql/mutations"

export default function NewProject({user}) {
  const [users, setUsers] = React.useState([]);
  const client = generateClient();

  React.useEffect(() => {
    fetchUsers();
  }, []);

  var currentUser = users.find((temp) => temp.name === user);

  async function fetchUsers() {
    const apiData = await client.graphql({ query: listUsersQuery });
    const usersFromAPI = apiData.data.listUsers.items;
    setUsers(usersFromAPI);
  }

  async function createUser(user) {
    const data = {
      name: user,
    };
    await client.graphql({
      query: createUserMutation,
      variables: { input: data },
    });
  }

  async function createProject(event) {
    event.preventDefault();
    currentUser = users.find((temp) => temp.name === user);
    if(!users.includes(currentUser)) {
      await createUser(user);
      const apiData = await client.graphql({ query: listUsersQuery });
      var usersFromAPI = apiData.data.listUsers.items;
      setUsers(usersFromAPI);
      currentUser = usersFromAPI.find((temp) => temp.name === user);
    }
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      completion: 0.0,
      status: true,
      userProjectsId: currentUser.id,
    };
    await client.graphql({
    query: createProjectMutation,
    variables: { input: data },
    });
    event.target.reset();
}

  return (
    <>
    <Heading level={3}>Create New Project</Heading><View as="form" margin="3rem 0" onSubmit={createProject}>
        <Flex direction="row" justifyContent="center">
            <TextField
                name="name"
                placeholder="Project Name"
                label="Project Name"
                labelHidden
                variation="quiet"
                required />
            <TextField
                name="description"
                placeholder="Project Description"
                label="Project Description"
                labelHidden
                variation="quiet"
                required />
            <Button type="submit" variation="primary">
                Create Project
            </Button>
        </Flex>
    </View>
    </>
  );
}