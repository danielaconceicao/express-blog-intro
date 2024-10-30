/*

La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare nel browser. */

//Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
const express = require('express');
const blog = express();
const host = 'http://127.0.0.1';
const port = 3004;

blog.listen(port, () => {
    console.log(`${host}:${port}`);
});

blog.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog</h1>')
});

//Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
const post = [
    {
        title: "La Magia delle Piante Grasse",
        content: "Le piante grasse sono molto più di semplici decorazioni. Scopri come queste piante uniche possono trasformare il tuo spazio e migliorare l’aria che respiri. In questo articolo, esploreremo le varietà più belle e come prendersene cura.",
        image: "",
        tags: ["piante", "giardinaggio", "decorazione", "sostenibilità"]
    },
    {
        title: "Ricette Veloci per una Cena Semplice",
        content: "Sei stanco di passare ore in cucina? Ecco cinque ricette semplici e veloci che puoi preparare in meno di 30 minuti. Perfette per le serate in cui il tempo è poco ma la voglia di mangiare bene è tanta!",
        image: "",
        tags: ["cucina", "ricette", "veloce", "cena"]
    },
    {
        title: "I Benefici della Meditazione Quotidiana",
        content: "La meditazione può sembrare una pratica difficile, ma i suoi benefici sono innegabili. Scopri come iniziare a meditare ogni giorno e migliorare il tuo benessere mentale e fisico.",
        image: "",
        tags: ["benessere", "meditazione", "salute", "mindfulness"]
    },
    {
        title: "Viaggi da Sogno: Le 5 Destinazioni Imperdibili",
        content: "Sei alla ricerca di nuove avventure? Ecco cinque destinazioni da sogno che dovresti assolutamente visitare nel tuo prossimo viaggio. Dai paesaggi mozzafiato alle culture affascinanti, non rimarrai deluso.",
        image: "",
        tags: ["viaggi", "avventura", "destinazioni", "turismo"]
    },
    {
        title: "La Tecnologia del Futuro: Cosa Aspettarsi",
        content: "La tecnologia sta avanzando a passi da gigante. In questo articolo, esploreremo le tendenze più promettenti per il futuro e come potrebbero influenzare la nostra vita quotidiana. Dall'intelligenza artificiale alla realtà aumentata, preparati a stupirti!",
        image: "",
        tags: ["tecnologia", "futuro", "innovazione", "intelligenza artificiale"]
    },
];

//Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
blog.get('/posts', (req, res) => {
    res.json({
        data: post,
        count: post.length
    });
});