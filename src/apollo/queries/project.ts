import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      status
      description

      client {
        id
        name
        email
      }
    }
  }
`;

export const GET_PROJECT_DETAILS = gql`
  query ($id: ID) {
    project(id: $id) {
      id
      name
      status
      description
      client {
        id
        name
        email
      }
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation createProject($client: String!, $name: String!, $status: String!, $description: String) {
    createProject(clientId: $client, name: $name, status: $status, description: $description) {
      id
    }
  }
`;

export const GET_CLIENTS = gql`
  query clients {
    clients {
      id
      name
      email
    }
  }
`;

export const DELETE_PROJECTS = gql`
  mutation deleteProjects($ids: [ID!]) {
    deleteProjects(ids: $ids) {
      ids
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!, $name: String!, $status: String!, $description: String) {
    updateProject(id: $id, name: $name, status: $status, description: $description) {
      id
      name
      status
      description
    }
  }
`;
