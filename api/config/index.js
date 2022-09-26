import dotenv from "dotenv";

dotenv.config();// con esto se meten las variables de .env a las environment variables

export default{ 
    database:{
        uri:process.env.DB_URI,
    },
    server:{
        port:process.env.PORT || 3000, // elige el process.env.port O 3000 (por default)
    },
    jwt:{
        secret:process.env.JWT_SECRET
    },

};
