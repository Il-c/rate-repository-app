import { gql } from 'apollo-boost';

export const REPOSITORY_ITEMS = gql`
  fragment RepositoryItems on RepositoryConnection {
    edges{
      node{
          id 
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
      }
    }
  }
`;