create table Avaliacoes (
	id integer,
	id_Exames integer,
	name varchar,
	price real,
	primary key(id, id_Exames),
	FOREIGN key (id_Exames) references Exames (id)
)

insert into Avaliacoes values(1, 1, 'Hemograma', 20.00);
insert into Avaliacoes values(2, 1, 'Glicemia', 12.50);
insert into Avaliacoes values(3, 1, 'Colesterol', 14.00);
insert into Avaliacoes values(4, 1, 'Triglicerídeos', 30.00);
insert into Avaliacoes values(5, 1, 'Tireoidina', 17.50);

insert into Avaliacoes values(1, 2, 'EAS', 11.50);
insert into Avaliacoes values(2, 2, 'Urocultura', 15.00);
insert into Avaliacoes values(3, 2, 'Creatinina', 24.00);
insert into Avaliacoes values(4, 2, 'Microalbuminúria', 10.70);

insert into Avaliacoes values(1, 3, 'EPF', 15.00);
insert into Avaliacoes values(2, 3, 'PSOF', 12.50);
insert into Avaliacoes values(3, 3, 'Rotavírus', 27.00);
insert into Avaliacoes values(4, 3, 'Adenovírus', 48.50);

select name, price from Avaliacoes where id_Exames = 3