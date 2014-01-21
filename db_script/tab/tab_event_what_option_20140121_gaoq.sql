DROP TABLE IF EXISTS `yuefanju`.`event_what_option`;
CREATE TABLE  `yuefanju`.`event_what_option` (
  `event_id` int(10) unsigned NOT NULL COMMENT '活动ID',
  `what_seq` varchar(5) CHARACTER SET latin1 NOT NULL COMMENT '活动内容选项序号',
  `what_describe` varchar(100) CHARACTER SET latin1 DEFAULT NULL COMMENT '活动内容描述',
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='活动内容选项表';