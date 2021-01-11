--Test database goes here

--CREATE
CREATE TABLE todo(
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"completed" BOOLEAN DEFAULT FALSE);

--DUMMY DATA
INSERT INTO "todo"("task") 
VALUES ('Brush Teeth'),
('Make Bed'),
('Shower');

--ALL
SELECT * FROM "todo";

--DROP
DROP TABLE "todo";

--GET
SELECT * FROM "todo";

--POST
INSERT INTO "todo" ("task", "completed")
VALUES ('Check Messages', True);

--PUT

--DELETE
DELETE FROM "todo" WHERE "id" = 3;