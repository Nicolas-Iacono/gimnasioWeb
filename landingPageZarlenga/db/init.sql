CREATE DATABASE IF NOT EXISTS `mov-consiente`;

USE `mov-consiente`;

CREATE TABLE IF NOT EXISTS `Users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `height` INT NOT NULL,
  `weight` DECIMAL(10,2) NOT NULL,
  `age` INT NOT NULL,
  PRIMARY KEY (`idUser`)
);

CREATE TABLE IF NOT EXISTS `Messages` (
  `idMessage` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT,
  `userId` INT,
  PRIMARY KEY (`idMessage`),
  FOREIGN KEY (`userId`) REFERENCES `Users`(`idUser`)
);
