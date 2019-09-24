import { gql } from 'apollo-boost';

const getPostsQuery = gql`
{
  posts {
    id
    title
    content
  }
}
`

const getAuthorsQuery = gql`
{
    authors {
      id
      firstName
      lastName
    
  }
}
`;


const addPostMutation = gql`
    mutation($title:String, $content:String!) {
      createPost(title:$title, content:$content) {
    author {
      posts {
        title
        content
      }
    }
  }
}
`;

export {
  getAuthorsQuery,
  getPostsQuery,
  addPostMutation
}