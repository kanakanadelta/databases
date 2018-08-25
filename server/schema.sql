DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

  /* Describe your table here.*/

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(200) NOT NULL,
  `userid` INTEGER NOT NULL,
  `roomname` VARCHAR(20),
  PRIMARY KEY (`id`)
);

-- ALTER TABLE `messages` ADD FOREIGN KEY (room_id) REFERENCES `chatrooms` (`id`) ON DELETE CASCADE;
-- ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`) ON DELETE CASCADE;



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

