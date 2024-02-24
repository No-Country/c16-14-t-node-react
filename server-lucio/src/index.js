import app from './app.js'
import { sequelize } from './database/database.js'

// import './models/Post.js'
// import './models/Step.js'
// import './models/Coment.js'

async function main(){
    try{
        // await sequelize.sync({force: true})
        app.listen(3000)
        console.log('Server on port 3000')
    }catch(error){
        console.log(error)
    }
}

main()