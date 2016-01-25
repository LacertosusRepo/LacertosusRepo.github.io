CREATE TABLE IF NOT EXISTS `downloads` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `filename` text,
    `dldate` datetime DEFAULT NULL,
    `count` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=MyISAM