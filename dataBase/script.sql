CREATE DATABASE sucos_organicos;

CREATE TABLE Categorias (
	id INT PRIMARY KEY NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    descricao TEXT NOT NULL
);

CREATE TABLE Produtos (
	id INT PRIMARY KEY NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    preco DOUBLE NOT NULL,
    estoque INT NOT NULL,
    link_foto VARCHAR(255) NOT NULL,
    id_departamento INT NOT NULL,
    CONSTRAINT departamento_produto FOREIGN KEY (id_departamento) REFERENCES Categorias(id)
);