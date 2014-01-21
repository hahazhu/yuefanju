DROP TABLE IF EXISTS `yuefanju`.`dat_event_part_choswhat`;
CREATE TABLE  `yuefanju`.`dat_event_part_choswhat` (
  `event_id` int(10) unsigned NOT NULL COMMENT '活动id',
  `event_participant_id` varchar(20) CHARACTER SET latin1 NOT NULL COMMENT '活动参与者',
  `event_what_select` varchar(5) CHARACTER SET latin1 NOT NULL COMMENT '活动参与者活动内容选择',
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='活动人员活动内容选择表';