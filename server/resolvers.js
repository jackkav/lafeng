import freshId from 'fresh-id'

export const resolverMap = {
  Query: {
    async visitor(_, args, { db }) {
      return db
        .collection('vistors')
        .findOne(...args)
    },
    async visitors(_, args, { db }) {
      return db
        .collection('vistors')
        .find().toArray()
    },
    async user(_, args, { db }) {
      return db
        .collection('users')
        .findOne(...args)
    },
    async users(_, args, { db }) {
      return db
        .collection('users')
        .find().toArray()
    },
  },
  Mutation: {
    async createUser(_, args, { db }) {
      const user = {
        _id: freshId(17),
        nickname: args.nickname,
        mobile: args.mobile,
      }
      const { result } = await db.collection('users').insert(user)
      return result.nInserted === 1
    },
  },
}