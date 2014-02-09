DROP TABLE IF EXISTS `yuefanju`.`event_msgboard`;
CREATE TABLE  `yuefanju`.`event_msgboard` (
  `event_id` int(10) unsigned NOT NULL COMMENT '活动ID',
  `event_participant` varchar(10)  NOT NULL COMMENT '活动参与者',
  `msg_crtime` datetime NOT NULL COMMENT '留言创建时间',
  `msg_content` varchar(4000)  NOT NULL COMMENT '留言内容'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='活动留言板';