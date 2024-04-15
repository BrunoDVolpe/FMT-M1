-- Exercício 1
CREATE TABLE departamento (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	dataCriacao DATE NOT NULL
);

-- Exercício 2
CREATE TABLE funcionario (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	idade INT NOT NULL,
	CHECK (idade >= 14),
	cargo VARCHAR(100) NOT NULL,
	salario DECIMAL(18,4) NOT NULL,
	idDepartamento INT NOT NULL,
	FOREIGN KEY (idDepartamento) REFERENCES departamento (id)
);

-- Exercício 3
INSERT INTO departamento (nome, dataCriacao) VALUES
('Comercial','2020-03-20'),
('Marketing','2020-03-20'),
('TI','2020-03-20');

-- Exercício 4
INSERT INTO funcionario (nome, idade, cargo, salario, idDepartamento) VALUES
('Bruno', 26, 'Desenvolvedor', 5000, 3),
('Ana', 30, 'Analista', 4500, 2),
('Pablo', 32, 'Consultor', 3500, 1);

-- Exercício 5
SELECT * FROM funcionario as f
INNER JOIN departamento as d ON f.idDepartamento = d.id;

-- Exercício 5 (variação personalizando colunas)
SELECT
f.nome AS nome_funcionario,
f.idade,
f.cargo,
f.salario,
d.nome AS nome_departamento,
d.dataCriacao AS data_criacao_departamento
FROM funcionario AS f
INNER JOIN departamento AS d
ON f.idDepartamento = d.id;

-- Exercício 6
UPDATE funcionario SET idade = 30 WHERE nome = 'Bruno';
UPDATE departamento SET nome = 'Tecnologia' WHERE id = 3;

-- Exercício 7
-- Teria opção de CASCADE direto no banco, que o Bruno não recomenda e um outro método que ele não lembra
-- Deixou o exercício mais simples, respeitando a ordem de deletar primeiro quem usar a foreign key e depois o objeto referenciado
DELETE FROM funcionario WHERE departamentoId = 2;
DELETE FROM departamento WHERE id = 2;

-- Exercício 8
DROP TABLE funcionario;
DROP TABLE departamento;

-- Exemplo de adicionar check e not null em coluna já criada
--ALTER TABLE departamento ALTER COLUMN nome TYPE VARCHAR(200) NOT NULL; (está errado, Bruno não lembrou)
-- Pesquisar melhor como faz.

-- Adicionar chave estrangeira pelo alter table
--ALTER TABLE departamento ADD CONSTRAINT
--FOREIGN KEY (iddepartamento) REFERENCES departamento (id);