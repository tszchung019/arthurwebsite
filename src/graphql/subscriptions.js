/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
      id
      name
      summary
      imgPath
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
      id
      name
      summary
      imgPath
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
      id
      name
      summary
      imgPath
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      title
      content
      blog {
        id
        name
        summary
        imgPath
        createdAt
        updatedAt
        __typename
      }
      comments {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      title
      content
      blog {
        id
        name
        summary
        imgPath
        createdAt
        updatedAt
        __typename
      }
      comments {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      title
      content
      blog {
        id
        name
        summary
        imgPath
        createdAt
        updatedAt
        __typename
      }
      comments {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      post {
        id
        title
        content
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      post {
        id
        title
        content
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      post {
        id
        title
        content
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
export const onCreateReply = /* GraphQL */ `
  subscription OnCreateReply($filter: ModelSubscriptionReplyFilterInput) {
    onCreateReply(filter: $filter) {
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
export const onUpdateReply = /* GraphQL */ `
  subscription OnUpdateReply($filter: ModelSubscriptionReplyFilterInput) {
    onUpdateReply(filter: $filter) {
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
export const onDeleteReply = /* GraphQL */ `
  subscription OnDeleteReply($filter: ModelSubscriptionReplyFilterInput) {
    onDeleteReply(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      avatar
      projects {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      avatar
      projects {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      avatar
      projects {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      name
      description
      completion
      status
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
      userProjectsId
      __typename
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      name
      description
      completion
      status
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
      userProjectsId
      __typename
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      name
      description
      completion
      status
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
      userProjectsId
      __typename
    }
  }
`;
