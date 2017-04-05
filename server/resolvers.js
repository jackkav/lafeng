import freshId from 'fresh-id'
import axios from 'axios'
import pad from 'pad-left'
import moment from 'moment'
const fetchData = query =>{
  return axios.get(`https://api.thetvdb.com/${query}`,
      {headers: {'Authorization': `Bearer ${process.env.token}`}})
}


export const resolverMap = {
  Episode:{
    episodeCode: episode => `S${pad(episode.airedSeason,2,'0')}E${pad(episode.airedEpisodeNumber,2,'0')}`,
    released: episode => moment(episode.firstAired).fromNow(),
    series: async episode => {
      const a = await fetchData(`series/${episode.seriesId}`)
      return a.data.data
    }
  },
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
      const a = await fetchData(`series/${args.id}`)
      if(a.status<400)
      return a.data.data
    },
    async episode(_, args){
      const a = await fetchData(`episodes/${args.id}`)
      if(a.status<400)
      return a.data.data
    },
    async episodes(_, args){
      const a = await fetchData(`series/${args.id}/episodes`)
      if(a.status<400)
      return a.data.data
    },
    async nextEpisode(_, args){
      const a = await fetchData(`series/${args.id}/episodes`)
      if(a.status<400){
      const next = a.data.data.filter(x=>(new Date(x.firstAired)>=new Date()))[0]
      const b =await fetchData(`episodes/${next.id}`)
      console.log(b.data)
      return b.data.data
      }
    },
    async unairedEpisodes(_, args){
      const a = await fetchData(`series/${args.id}/episodes`)
      if(a.status<400)
      return a.data.data.filter(x=>(new Date(x.firstAired)>=new Date()))
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