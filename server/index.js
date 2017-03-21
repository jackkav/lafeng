import Koa from 'koa'
import Router from  'koa-router'
import convert from 'koa-convert'
import graphqlHTTP from 'koa-graphql'
import fs from 'fs'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'
import { resolverMap } from './resolvers'

const app = new Koa()
const router = new Router()
let schemasText = fs.readdirSync('./schemas/').map((fileName) => fs.readFileSync(`./schemas/${fileName}`, 'utf-8'))

const schema = makeExecutableSchema({
  resolvers: resolverMap,
  typeDefs: schemasText,
})
MongoClient.connect(process.env.MONGODB_URL)
  .then((db) => {
    console.log('Running...')

    router.all('/graphql', convert(graphqlHTTP({
      context: { db },
      schema,
      graphiql: true,
      formatError: error => {
        console.error(error)
        return error
      },
    })))

    app.use(router.routes()).use(router.allowedMethods())

    app.listen(3080)
  })