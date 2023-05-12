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
        projects {
          items {
            id
            name
            description
            completion
            status
            createdAt
            updatedAt
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;