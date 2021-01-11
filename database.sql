--Test database goes here

CREATE TABLE todo(
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"completed" BOOLEAN DEFAULT FALSE);

INSERT INTO "todo" ("task") VALUES ('Brush Teeth');

SELECT * FROM "todo";