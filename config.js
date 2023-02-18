require('dotenv').config()

const config={
    api:{
        nodeEnv: process.env.NODE_ENV,
        port:process.env.PORT,
        host: process.env.HOST
    },
    db:{
        development:{ //productos de prueba, para ir probando la funcionalidad 
           dialect:'postgres',
           host:'localhost',
           username:'postgres',
           password:'root',
           database:'blog-db',
           define:{
            timestamps:true, 
            underscored:true, 
            underscoredAll:true
           }
        },
        test:{

        },
        production:{ 

        }
    }
}

module.exports= config