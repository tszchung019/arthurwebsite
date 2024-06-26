/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createReply = /* GraphQL */ `
  mutation CreateReply(
    $input: CreateReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    createReply(input: $input, condition: $condition) {
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
export const updateReply = /* GraphQL */ `
  mutation UpdateReply(
    $input: UpdateReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    updateReply(input: $input, condition: $condition) {
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
export const deleteReply = /* GraphQL */ `
  mutation DeleteReply(
    $input: DeleteReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    deleteReply(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
