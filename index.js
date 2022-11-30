
const express = require('express');
const loginRouter = require('./router/route')




const app = express()


app.use(express.json({
    urlencoded : true
}))

app.use('/', loginRouter)

app.listen(8000,()=>{
    console.log('Yo this is console of port 8k')
})
