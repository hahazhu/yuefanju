CREATE TABLE `dat_event_part_choswhen` (
  `event_id` int(10) unsigned NOT NULL COMMENT '活动id',
  `event_participant_id` varchar(20) CHARACTER SET latin1 NOT NULL COMMENT '活动参与者',
  `event_when_select` varchar(5) CHARACTER SET latin1 NOT NULL COMMENT '活动参与者日期选择',
  PRIMARY KEY (`event_id`,`event_when_select`,`event_participant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='活动人员时间选择表';
