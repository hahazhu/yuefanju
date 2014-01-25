CREATE TABLE `event_when_option` (
  `event_id` int(10) unsigned NOT NULL COMMENT '活动id',
  `when_seq` int(11) NOT NULL AUTO_INCREMENT COMMENT '时间选项序号',
  `when_describe` varchar(100) CHARACTER SET latin1 DEFAULT NULL COMMENT '时间描述',
  PRIMARY KEY (`when_seq`,`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8 COMMENT='活动时间选项表';
