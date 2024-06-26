/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      summary
      imgPath
      posts {
        items {
          id
          title
          content
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        summary
        imgPath
        posts {
          nextToken
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      blog {
        id
        name
        summary
        imgPath
        posts {
          nextToken
        }
        createdAt
        updatedAt
        __typename
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        blog {
          id
          name
          summary
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        content
        blog {
          id
          name
          summary
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      content
      replys {
        nextToken
        __typename
      }
      user {
        id
        name
        avatar
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      postCommentsId
      userCommentsId
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          content
          createdAt
          updatedAt
          blogPostsId
        }
        content
        createdAt
        updatedAt
        postCommentsId
        userCommentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReply = /* GraphQL */ `
  query GetReply($id: ID!) {
    getReply(id: $id) {
      id
      comment {
        id
        content
        createdAt
        updatedAt
        postCommentsId
        userCommentsId
        __typename
      }
      content
      user {
        id
        name
        avatar
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      commentReplysId
      userReplysId
      __typename
    }
  }
`;
export const listReplies = /* GraphQL */ `
  query ListReplies(
    $filter: ModelReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        commentReplysId
        userReplysId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      avatar
      projects {
        items {
          id
          name
          description
          completion
          status
          createdAt
          updatedAt
          userProjectsId
        }
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      replys {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        avatar
        projects {
          nextToken
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      description
      completion
      status
      user {
        id
        name
        avatar
        projects {
          nextToken
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userProjectsId
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        completion
        status
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userProjectsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
