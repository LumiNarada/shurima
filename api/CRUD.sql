CREATE DATABASE shurima;
	USE shurima;
	DROP TABLE integrante;
	CREATE TABLE integrante(
		correo VARCHAR (50) NOT NULL,
		pass VARCHAR (100) NOT NULL,
		nick VARCHAR (50) NOT NULL,
		nombre VARCHAR (100) NOT NULL,
		main VARCHAR (100) NOT NULL,
		edad INT (2) NOT NULL,
		rango VARCHAR (100) NOT NULL,
		division VARCHAR (100) NOT NULL,
		ruta_foto VARCHAR (100) NOT NULL,
		ruta_video VARCHAR (100) NOT NULL, 
		administrador BOOL NOT NULL,
		aceptado BOOL NOT NULL,
		CONSTRAINT correo_integrante_pk
			PRIMARY KEY (correo)
	);
	INSERT INTO integrante VALUES ("chona@gmail.com", "1234", "Faker", "Lee \"Faker\" Sang-hyeok", "Azir", 25, "Lider", "Challenger", "faker.jpg", "https://www.youtube.com/embed/n8ImQ1SjdY0", TRUE, TRUE);
	INSERT INTO integrante VALUES ("coco@gmail.com", "1234",  "Wolf", "Lee \"Wolf\" Jae-wan", "Oriana", 19, "Lider", "Gran Maestro", "wolf.png","https://www.youtube.com/embed/giN4JprW21g", FALSE, TRUE);
	INSERT INTO integrante VALUES ("yakiechan@gmail.com", "1234",  "Yakie", "Jackie Chan", "Yasuo", 60, "Sirviente", "Carton Corrugado", "Yakie.jpg", "https://www.youtube.com/embed/n8ImQ1SjdY0",FALSE, FALSE);
	SELECT * FROM integrante;