DROP TABLE IF EXISTS `yuefanju`.`event_when_option`;
CREATE TABLE  `yuefanju`.`event_when_option` (
  `event_id` int(10) unsigned NOT NULL COMMENT '活动id',
  `when_seq` varchar(5) CHARACTER SET latin1 NOT NULL COMMENT '时间选项序号',
  `when_describe` varchar(100) CHARACTER SET latin1 DEFAULT NULL COMMENT '时间描述',
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='活动时间选项表';