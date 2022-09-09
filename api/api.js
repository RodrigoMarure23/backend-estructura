import express from 'express';

const api = express();

api.get('/status', (req,res)=>{
    return res.json({
        msg:'Api en linea y funcionando'
    })
})
export default api;
