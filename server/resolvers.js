import freshId from 'fresh-id'
import axios from 'axios'
export const resolverMap = {
  Query: {
    async login(){
      const a = await axios.post('https://api.thetvdb.com/login',
      {
          apikey: process.env.apikey,
          user: process.env.user,
          userKey: process.env.userKey 
      })
      if(a.status<400)
      return a.data.token
    },
    async series(_, args){
      const a = await axios.get(`https://api.thetvdb.com/series/${args.id}`,
      {headers: {'Authorization': `Bearer ${args.token}`}})
      if(a.status<400)
      return a.data.data
    },
    async episode(_, args){
      const a = await axios.get(`https://api.thetvdb.com/episodes/${args.id}`,
      {headers: {'Authorization': `Bearer ${args.token}`}})
      if(a.status<400)
      return a.data.data
    },
    async episodes(_, args){
      const a = await axios.get(`https://api.thetvdb.com/series/${args.id}/episodes`,
      {headers: {'Authorization': `Bearer ${args.token}`}})
      if(a.status<400)
      return a.data.data
    },
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