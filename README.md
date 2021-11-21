# treinamento-will

## Subir banco de dados em container
`docker run -p 3307:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root  mysql`

Trocar a senha para conexao
`docker exec -it mysql bash`
Dentro do container
`mysql -u root -p `
`ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'senha';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha';
SELECT plugin FROM mysql.user WHERE User = 'root';`
