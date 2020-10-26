import { gql } from 'apollo-boost';
import { REPOSITORY_ITEMS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories{
      ...RepositoryItems
    }
  }
  ${REPOSITORY_ITEMS}
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;