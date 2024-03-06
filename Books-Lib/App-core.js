const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:3000';
const client = new MongoClient(url);

async function main(){
    try {
        await client.connect();
        console.log("Entrando no banco de dados... Aguarde...");
        const db = client.db('LibBook');
        const collection = db.collection('Estante de Livros');

        // Como fazer um "create" que faça o user adicionar mais de um livro por vez?
        const insertResult = await collection.insertOne ({title: 'Aba' , author: 'Baba' , yrpubl: '1952' });
        console.log ("O livro:", insertResult.insertedId, " foi adicionado");

        // O "read" procura o que já tem no banco de dados, mas como adiciono mais filtros de busca?
        const findResult = await collection.findOne({title: '', yrpubl: ''});
        console.log ("Livros encontrados:", findResult);

        // Como mostrar essas atualizações com mensagens em outras aplicações?
        const updateResult = await collection.updateOne({title: ''})
        console.log ("O livro", updateResult.modifiedCount, "foi atualizado.");

        // Como deixo essa aplicação mais genérica? Para adicionar livros aos poucos?
        const deleteResult = await collection.deleteOne({ title: ''});
        console.log("O livro", deleteResult.deletedCount, "foi deletado." );
    } finally {
        await client.close();
    }
    }
main().catch(console.error);