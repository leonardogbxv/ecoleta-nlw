const sqlite3 = require('sqlite3').verbose()

// criar objeto de operacoes BD
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db

// usar objeto para as operacoes
db.serialize(() => {

  // criar tabela
  // db.run(`
  //   CREATE TABLE IF NOT EXISTS places (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     image TEXT,
  //     name TEXT,
  //     address TEXT,
  //     address2 TEXT,
  //     state TEXT,
  //     city TEXT,
  //     items TEXT
  //   );
  // `)

  // // inserir dados na tabela
  // const query = `
  //   INSERT INTO places (
  //     image,
  //     name,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     items
  //   ) VALUES (?,?,?,?,?,?,?);
  // `

  // const values = [
  //   "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  //   "Papersider",
  //   "Guilherme Gemballa, Jardim América",
  //   "Nº 260",
  //   "Santa Catarina",
  //   "Rio do Sul",
  //   "Resíduos Eletrônicos, Lâmpadas"
  // ]

  // function afterInsertData(err) {
  //   if(err) {
  //     return console.log(err)
  //   }

  //   console.log('Cadastrado com sucesso')
  //   console.log(this)
  // }
  
  // // (sql, params, callback)
  // db.run(query, values, afterInsertData)

  // consultar dados da tabela
  // db.all(`SELECT * FROM places`, function(err, rows) {
  //   if(err) {
  //     return console.log(err)
  //   }

  //   console.log('Aqui estão seus registros: ')
  //   console.log(rows)
  // })

  // deletar dado da tabela
  // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
  //   if(err) {
  //     return console.log(err)
  //   }

  //   console.log("Registro deletado com sucesso!")
  // })

})