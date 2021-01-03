const express = require('express')
const expressGraphQL = require('express-graphql')

const app = express()

app.use('/graphql', expressGraphQL({
    graphiql: true
}))

// node server.js
/* TypeError: expressGraphQL is not a function
    at Object.<anonymous> (C:\Users\alber\source\repos\users
\server.js:6:21)
    at Module._compile (internal/modules/cjs/loader.js:1076:
30)
    at Object.Module._extensions..js (internal/modules/cjs/l
oader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:941:32)
    at Function.Module._load (internal/modules/cjs/loader.js
:782:14)
    at Function.executeUserEntryPoint [as runMain] (internal
/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/

app.listen(4000,()=>{
    console.log('listening')
})