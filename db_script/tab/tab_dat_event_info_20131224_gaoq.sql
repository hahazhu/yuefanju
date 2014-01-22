DROP TABLE IF EXISTS `yuefanju`.`dat_event_info`;
CREATE TABLE  `yuefanju`.`dat_event_info` (
  `event_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '活动ID',
  `event_name` varchar(100) DEFAULT NULL COMMENT '活动名称',
  `event_creator` varchar(10) DEFAULT NULL COMMENT '活动创建者',
  `event_ispwd` varchar(2) DEFAULT NULL COMMENT '是否加密（0：否 1：是）',
  `event_password` varchar(32) DEFAULT NULL COMMENT '活动密码',
  `event_crtime` datetime DEFAULT NULL COMMENT '活动时间',
  `event_comment` varchar(4000) DEFAULT NULL COMMENT '活动简介',
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='活动基本信息表';