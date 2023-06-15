CREATE DATABASE LojaVirtual;

USE LojaVirtual;

-- Comandos para fins de teste: cuidado!!!
SHOW TABLES;

DROP TABLE Categoria;
DROP TABLE Clientes;
DROP TABLE Produtos;
DROP TABLE Vendas;

select * from Categoria;
select * from Clientes;
select * from Produtos;
select * from Vendas;
-- Fim dos comandos de teste


-- Inserção de valores (atualizado):

-- Inserir dados na tabela Categoria
INSERT INTO Categoria (idCategoria, descricao, createdAt, updatedAt)
VALUES (1, 'Eletrônicos', '2023-06-01 10:00:00', '2023-06-01 10:00:00'),
(2, 'Roupas', '2023-06-01 12:00:00', '2023-06-01 19:00:00'),
(3, 'Acessórios', '2023-06-01 15:00:00', '2023-06-01 22:00:00');

-- Inserir dados na tabela Cliente
INSERT INTO Clientes (idCliente, nome, endereco, email, createdAt, UpdatedAt)
VALUES (1, 'João Silva', 'Rua A, 123', 'joao.silva@example.com', '2023-06-01 10:00:00', '2023-06-01 10:00:00'),
(2, 'Maria Santos', 'Av. B, 456', 'maria.santos@example.com', '2023-06-02 11:30:00', '2023-06-02 11:30:00'),
(3, 'Pedro Oliveira', 'Rua C, 789', 'pedro.oliveira@example.com', '2023-06-03 14:45:00', '2023-06-03 14:45:00');

-- Inserir dados na tabela Produto
INSERT INTO Produtos (idProduto, descricao, valor, quantidade, idCategoria, createdAt, UpdatedAt)
VALUES (4, 'Notebook', 2500.00, 10, 1, '2023-06-04 09:15:00', '2023-06-04 09:15:00'),
(6, 'Camiseta', 39.90, 50, 2, '2023-06-05 16:30:00', '2023-06-05 16:30:00'),
(7, 'Óculos de sol', 120.00, 20, 3, '2023-06-06 13:00:00', '2023-06-06 13:00:00');

-- Inserir dados na tabela Venda
INSERT INTO Vendas (idVenda, idCliente, idProduto, createdAt, UpdatedAt)
VALUES (1, 1, 1, '2023-06-04 09:15:00', '2023-06-04 09:15:00'),
 (2, 2, 2, '2023-06-04 09:15:00', '2023-06-04 09:15:00'),
 (3, 3, 3, '2023-06-04 09:15:00', '2023-06-04 09:15:00');


