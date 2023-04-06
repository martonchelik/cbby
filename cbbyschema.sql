CREATE DATABASE  IF NOT EXISTS `cbby` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cbby`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cbby
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ads`
--

DROP TABLE IF EXISTS `ads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ads` (
  `idads` int NOT NULL AUTO_INCREMENT,
  `model` varchar(45) NOT NULL,
  `prodyear` int NOT NULL,
  `engvol` decimal(2,1) NOT NULL,
  `price` int NOT NULL,
  `milage` int NOT NULL,
  `active` tinyint NOT NULL,
  `new` tinyint NOT NULL,
  `owner` int NOT NULL,
  `engtype` int NOT NULL,
  `body` int NOT NULL,
  `gearbox` int NOT NULL,
  `transmission` int NOT NULL,
  `color` int NOT NULL,
  `made` int NOT NULL,
  PRIMARY KEY (`idads`),
  KEY `users_idx` (`owner`),
  KEY `enginetypes_idx` (`engtype`),
  KEY `bodytypes_idx` (`body`),
  KEY `gearboxes_idx` (`gearbox`),
  KEY `transmissions_idx` (`transmission`),
  KEY `colors_idx` (`color`),
  KEY `carbrands_idx` (`made`),
  CONSTRAINT `bodytypes` FOREIGN KEY (`body`) REFERENCES `bodytypes` (`idbt`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `carbrands` FOREIGN KEY (`made`) REFERENCES `carbrands` (`idcb`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `colors` FOREIGN KEY (`color`) REFERENCES `colors` (`idc`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `enginetypes` FOREIGN KEY (`engtype`) REFERENCES `enginetypes` (`idet`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `gearboxes` FOREIGN KEY (`gearbox`) REFERENCES `gearboxes` (`idgb`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `transmissions` FOREIGN KEY (`transmission`) REFERENCES `transmissions` (`idtm`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `users` FOREIGN KEY (`owner`) REFERENCES `users` (`idu`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ads`
--

LOCK TABLES `ads` WRITE;
/*!40000 ALTER TABLE `ads` DISABLE KEYS */;
/*!40000 ALTER TABLE `ads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bodytypes`
--

DROP TABLE IF EXISTS `bodytypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bodytypes` (
  `idbt` int NOT NULL AUTO_INCREMENT,
  `bodytype` varchar(45) NOT NULL,
  PRIMARY KEY (`idbt`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bodytypes`
--

LOCK TABLES `bodytypes` WRITE;
/*!40000 ALTER TABLE `bodytypes` DISABLE KEYS */;
INSERT INTO `bodytypes` VALUES (1,'Sedan'),(2,'Coupe'),(3,'SUV'),(4,'Hatchback'),(5,'Van'),(6,'Wagon'),(7,'Bus'),(8,'Truck');
/*!40000 ALTER TABLE `bodytypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carbrands`
--

DROP TABLE IF EXISTS `carbrands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carbrands` (
  `idcb` int NOT NULL AUTO_INCREMENT,
  `carbrand` varchar(45) NOT NULL,
  PRIMARY KEY (`idcb`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carbrands`
--

LOCK TABLES `carbrands` WRITE;
/*!40000 ALTER TABLE `carbrands` DISABLE KEYS */;
INSERT INTO `carbrands` VALUES (1,'BMW'),(2,'Audi'),(3,'Ford'),(4,'Mercedes'),(5,'Volvo'),(6,'Porsche'),(7,'Mini'),(8,'Hummer'),(9,'Bentley'),(10,'Ferrari');
/*!40000 ALTER TABLE `carbrands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `idc` int NOT NULL AUTO_INCREMENT,
  `color` varchar(45) NOT NULL,
  PRIMARY KEY (`idc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enginetypes`
--

DROP TABLE IF EXISTS `enginetypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enginetypes` (
  `idet` int NOT NULL AUTO_INCREMENT,
  `enginetype` varchar(45) NOT NULL,
  PRIMARY KEY (`idet`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enginetypes`
--

LOCK TABLES `enginetypes` WRITE;
/*!40000 ALTER TABLE `enginetypes` DISABLE KEYS */;
INSERT INTO `enginetypes` VALUES (1,'Gasoline'),(2,'Diesel'),(3,'Electric'),(4,'Hybrid'),(5,'Hydrogen'),(6,'Other');
/*!40000 ALTER TABLE `enginetypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gearboxes`
--

DROP TABLE IF EXISTS `gearboxes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gearboxes` (
  `idgb` int NOT NULL AUTO_INCREMENT,
  `gb` varchar(45) NOT NULL,
  PRIMARY KEY (`idgb`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gearboxes`
--

LOCK TABLES `gearboxes` WRITE;
/*!40000 ALTER TABLE `gearboxes` DISABLE KEYS */;
INSERT INTO `gearboxes` VALUES (1,'Mechanic'),(2,'Auto');
/*!40000 ALTER TABLE `gearboxes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transmissions`
--

DROP TABLE IF EXISTS `transmissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transmissions` (
  `idtm` int NOT NULL AUTO_INCREMENT,
  `drivetype` varchar(45) NOT NULL,
  PRIMARY KEY (`idtm`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transmissions`
--

LOCK TABLES `transmissions` WRITE;
/*!40000 ALTER TABLE `transmissions` DISABLE KEYS */;
INSERT INTO `transmissions` VALUES (1,'FWD'),(2,'RWD'),(3,'AWD'),(4,'4WD');
/*!40000 ALTER TABLE `transmissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idu` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` int NOT NULL,
  `regdate` date NOT NULL,
  `acctype` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `foreignkey` varchar(45) NOT NULL,
  PRIMARY KEY (`idu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-27  1:25:19
