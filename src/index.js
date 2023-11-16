require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/', async(req, res)=>{
    return res.json('Oi nenem...infelizmento nao sou tão foda igual o cara do tiktok(até pq não sei a área dele...Mas tentei user um pouco do que eu sei...Vai digitando: 1,2 e 3 na barra ali em cima na URL');
})
app.get('/1', async(req, res)=>{
    return res.json('Oi amo, queria pedir desculpa de nao ter tirado meu tempo antes pra ficar com vc... e fazer vc perder seu tempo...');
})
app.get('/2', async(req, res)=>{
    return res.json('Entao tirei um tempinho agora pra te monstrar as nerdolices que eu to aprendendo');
})
app.get('/3', async(req, res)=>{
    return res.json('Te amo, e me desculpa');
})
app.listen(PORT, ()=>{
    console.log(PORT);
});