-- Drops the abundance_db if it exists currently --
DROP DATABASE IF EXISTS abundance_db;
-- Creates the "abundance_db" database --
CREATE DATABASE abundance_db;
USE abundance_db;


CREATE TABLE produce_items (
	id int NOT NULL AUTO_INCREMENT,
	item_name VARCHAR(200) NULL,
	photo_url VARCHAR(200) NULL,
	category VARCHAR(200) NULL,
	PRIMARY KEY (id)
);

INSERT INTO produce_items (item_name, photo_url, category)
VALUES	('apple', 'apple.jpg', 'fruit'),
		('avocado','avocado.jpg', 'fruit'),
		('blackberry','blackberry.jpg', 'fruit'),
		('blueberry','blueberry.jpg', 'fruit'),
		('grape','grape.jpg', 'fruit'),
		('lemon','lemon.jpg', 'fruit'),
		('lime','lime.jpg', 'fruit'),
		('orange','orange.jpg', 'fruit'),
		('strawberry','strawberry.jpg', 'fruit'),
		('tomato','tomato.jpg', 'fruit'),
		('basil','basil.jpg', 'herb'),
		('chive','chive.jpg', 'herb'),
		('dill','dill.jpg', 'herb'),
		('ginger','ginger.jpg', 'herb'),
		('lavender','lavender.jpg', 'herb'),
		('mint','mint.jpg', 'herb'),
		('oregano','oregano.jpg', 'herb'),
		('parsley','parsley.jpg', 'herb'),
		('rosemary','rosemary.jpg', 'herb'),
		('thyme','thyme.jpg', 'herb'),
		('broccoli','broccoli.jpg', 'vegatable'),
		('carrot','carrot.jpg', 'vegatable'),
		('cucumber','cucumber.jpg', 'vegatable'),
		('eggplant','eggplant.jpg', 'vegatable'),
		('garlic','garlic.jpg', 'vegatable'),
		('kale','kale.jpg', 'vegatable'),
		('lettuce','lettuce.jpg', 'vegatable'),
		('onion','onion.jpg', 'vegatable'),
		('potato','potato.jpg', 'vegatable'),
		('spinach','spinach.jpg', 'vegatable');