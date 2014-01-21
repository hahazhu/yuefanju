DROP TABLE IF EXISTS `yuefanju`.`dat_event_participant`;
CREATE TABLE  `yuefanju`.`dat_event_participant` (
  `event_id` int(10) unsigned NOT NULL COMMENT '活动id',
  `event_participant_id` varchar(20) CHARACTER SET latin1 NOT NULL COMMENT '活动参与者',
  `event_participant_name` varchar(20) CHARACTER SET latin1 DEFAULT NULL COMMENT '活动参与者选择的时间',
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='活动参与人员表';