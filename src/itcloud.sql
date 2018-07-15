/*
SQLyog Enterprise - MySQL GUI v6.14
MySQL - 5.1.73-community : Database - big_data
*********************************************************************
*/





/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

create database if not exists `big_data`;

USE `big_data`;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*Table structure for table `location_info` */

DROP TABLE IF EXISTS `location_info`;

CREATE TABLE `location_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `log_date` date DEFAULT NULL,
  `location` varchar(10) NOT NULL,
  `total_count` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

/*Data for the table `location_info` */

insert  into `location_info`(`id`,`log_date`,`location`,`total_count`) values (1,'2016-04-21','北京',338),(2,'2015-04-21','上海',154),(3,'2015-04-21','天津',63),(4,'2015-04-21','重庆',126),(5,'2015-04-21','辽宁',730),(6,'2015-04-21','吉林',534),(7,'2015-04-21','黑龙江',236),(8,'2015-04-21','河北',279),(9,'2015-04-21','云南',1037),(10,'2015-04-21','山东',1792),(11,'2015-04-21','安徽',427),(12,'2015-04-21','江苏',793),(13,'2015-04-21','台湾',20),(14,'2015-04-21','西藏',12),(15,'2015-04-21','广东',679),(16,'2015-04-21','甘肃',333);

/*Table structure for table `menu` */

DROP TABLE IF EXISTS `menu`;

CREATE TABLE `menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `action` varchar(255) DEFAULT NULL,
  `style` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PK_MENU_PID` (`parent_id`),
  CONSTRAINT `PK_MENU_PID` FOREIGN KEY (`parent_id`) REFERENCES `menu` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `menu` */

insert  into `menu`(`id`,`name`,`action`,`style`,`description`,`parent_id`,`deleted`) values (1,'概览','','mainicon_console_13',NULL,NULL,0),(2,'游戏玩家','','mainicon_console_33',NULL,NULL,0),(3,'等级分析','','mainicon_console_23',NULL,NULL,0),(4,'收人分析','','mainicon_console_43',NULL,NULL,0),(5,'设置','','mainicon_console_99',NULL,NULL,0),(6,'游戏概况','','icon_dashboard_01',NULL,1,0),(7,'玩家分布','show_user_dist()','icon_app_servers_overview_01',NULL,2,NULL),(8,'玩家留存','show_user_drr()','icon_running_01',NULL,2,NULL),(9,'游戏时长','show_user_long()','icon_profile_01',NULL,2,NULL),(10,'游戏时段','show_user_time()','icon_process_01',NULL,2,NULL),(11,'等级分布','show_level_dist()','icon_key_horn_list_01',NULL,3,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
