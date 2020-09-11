import { createConnection } from 'typeorm';

/* busca o arquivo ormconfig.json e utiliza as
* configurações para se conectar ao banco

* Obs.: As configurações também poderiam ser passadas
* diretamente pela função em formato json
*/
createConnection();
