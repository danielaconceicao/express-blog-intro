//Creiamo il progetto base con una rotta che ritorna un h1 con scritto Benvenuto nel mio blog!
const express = require('express');
const postsControllers = require('./Controllers/PostsControllers');
const blog = express();
blog.use(express.static('public'));

const host = 'http://127.0.0.1';
const port = 3004;

blog.listen(port, () => {
    console.log(`${host}:${port}`);
});

blog.get('/', (req, res) => {
    const markup = `
        <img src="/img/chakra_orig.jpg">
        <img src="/img/come-prendersi-cura-delle-piante-grasse-1-it-000.jpg">
        <img src="/img/foto-materia-unifor-noticias-futuro-logo-ali-getty-images-800.jpg">
        <img src="/img/imagens-de-comida-para-qualquer-restaurante_249033-18.avif">
        <img src="/img/viagem.jpg">
    `
    res.send('<h1>Benvenuto nel mio blog</h1>')
});

//Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale. La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato.
blog.get('/posts', postsControllers.index);