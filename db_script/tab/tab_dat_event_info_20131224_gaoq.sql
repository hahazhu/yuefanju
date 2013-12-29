CREATE TABLE `dat_event_info` (
  `event_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '活动ID',
  `event_name` varchar(100) DEFAULT NULL COMMENT '活动名称',
  `event_creator` varchar(10) DEFAULT NULL COMMENT '活动创建者',
  `event_crtime` varchar(8) DEFAULT NULL COMMENT '活动时间',
  `event_comment` varchar(4000) DEFAULT NULL COMMENT '活动简介',
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COMMENT='活动基本信息表';
