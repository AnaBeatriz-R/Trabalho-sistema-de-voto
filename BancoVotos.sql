CREATE TABLE Sessao (
	id SERIAL PRIMARY KEY,
	opcao1 VARCHAR(3),
	opcao2 VARCHAR(3)
)

CREATE TABLE Politico (
	id SERIAL PRIMARY KEY,
	usuario VARCHAR(100),
	login VARCHAR(100),
	senha VARCHAR(100)
)

CREATE TABLE Voto(
	id_Sessao int ,
	id_Politico int ,
	resposta INT,
	Estado VARCHAR(40)
)
