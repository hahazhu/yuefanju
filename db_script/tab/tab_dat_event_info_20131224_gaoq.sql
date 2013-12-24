CREATE TABLE `yuefanju`.`dat_event_info` (
  `event_id` VARCHAR(10) NOT NULL COMMENT '活动ID',
  `event_name` VARCHAR(100) COMMENT '活动名称',
  `event_creator` VARCHAR(10) COMMENT '活动创建者',
  `event_crtime` DATETIME COMMENT '活动创建时间',
  `event_comment` VARCHAR(4000) COMMENT '活动简介',
  PRIMARY KEY (`event_id`)
)
ENGINE = InnoDB
COMMENT = '活动基本信息表';
