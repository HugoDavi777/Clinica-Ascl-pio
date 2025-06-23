create table consulta (
	id serial primary key,
	id_Exame integer,
	cpf varchar,
	date date,
	hora time,
	description varchar,
	price real,
	FOREIGN KEY (id_Exame) REFERENCES Exames (id)
);

insert into consulta(id_Exame, cpf, date, hora, description, price)
values(1, '111', '27/05/25','08:00', 'Exame de Sangue. Avalioções: Hemograma', 12.50);

insert into consulta(id_Exame, cpf, date, hora, description, price)
values(2, '111', '02/07/25','10:00', 'Exame de Urina. Avalioções: PSE', 10.50);

insert into consulta(id_Exame, cpf, date, hora, description, price)
values(1, '222', '29/03/25','18:00', 'Exame de Sangue. Avalioções: Glecogenio', 12.50);

select * from consulta;

select * from consulta where cpf = '111';