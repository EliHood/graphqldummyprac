export default {
    Author: {
      posts: (parent, args, context, info) => parent.getPosts()
    },
    Post: {
      author: (parent, args, context, info) => parent.getAuthor()
    },
    Query: {
      posts: (parent, args, { db }, info) => db.Post.findAll(),
      authors: (parent, args, { db }, info) => db.Author.findAll(),
      post: (parent, { id }, { db }, info) => db.Post.findByPk(id),
      author: (parent, { id }, { db }, info) => db.Author.findByPk(id)
    },
    Mutation: {
      createPost: (parent, { title, content, authorId }, { db }, info) =>
        db.Post.create({
          title: title,
          content: content,
          id: authorId
        }),
      updatePost: (parent, { title, content, id }, { db }, info) =>
        db.Post.update(
          {
            title: title,
            content: content
          },
          {
            where: {
              id: id
            }
          }
        ),
      deletePost: (parent, { id }, { db }, info) =>
        db.Post.destroy({
          where: {
            id: id
          }
        })
    }
  };