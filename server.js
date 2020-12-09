const express = require('express')
const ExpressGraphQL = require('express-graphql')

const app = express()

app.use('/graphql',ExpressGraphQL({
  graphiql: true  
}))

app.listen(4000,()=>{
  console.log('listening')
})
