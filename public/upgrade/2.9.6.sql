CREATE TABLE `shd_friendly_links`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `domain` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `link_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `is_open` tinyint(1) NOT NULL DEFAULT 0,
  `create_time` int(11) NOT NULL DEFAULT 0,
  `update_time` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);
INSERT INTO `shd_nav` (`name`, `url`, `pid`, `order`, `fa_icon`, `nav_type`, `relid`, `menuid`, `lang`, `plugin`, `menu_type` ) VALUES('合同管理', 'contract', 4, 0, '', 0, '1', 1, '', '', 1 );
CREATE TABLE `shd_contract_pdf` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pdf_num` varchar(50) NOT NULL DEFAULT '' COMMENT '合同编号',
  `contract_id` int(11) NOT NULL DEFAULT '0' COMMENT '合同模板ID',
  `uid` int(11) NOT NULL DEFAULT '0',
  `host_id` int(11) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0已作废，1已签订，2待签订，3待邮寄，4已邮寄',
  `pdf_address` varchar(500) NOT NULL DEFAULT '' COMMENT 'PDF地址',
  `information` varchar(500) NOT NULL DEFAULT '' COMMENT '主机信息',
  `ip` varchar(20) NOT NULL DEFAULT '' COMMENT '用户IP',
  `create_time` int(11) NOT NULL DEFAULT '0',
  `express_company` varchar(255) NOT NULL DEFAULT '' COMMENT '快递公司',
  `express_order` varchar(255) NOT NULL DEFAULT '' COMMENT '快递单号',
  `remark` varchar(500) NOT NULL DEFAULT '',
  `is_post` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否邮寄：1是，0否',
  `sign_addr` varchar(5000) NOT NULL DEFAULT '' COMMENT '签名图片地址',
  `cancel_post` tinyint(1) NOT NULL DEFAULT '0' COMMENT '已取消过邮寄',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `PDF` (`pdf_num`) USING BTREE,
  KEY `uid` (`uid`) USING BTREE,
  KEY `host_id` (`host_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;
CREATE TABLE `shd_contract` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '名称',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态：0关闭(默认)，1显示',
  `force` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否强制：0否(默认)，1是',
  `product_id` varchar(100) NOT NULL DEFAULT '' COMMENT '产品ID：,隔开',
  `notes` tinyint(1) NOT NULL DEFAULT '0' COMMENT '提示：0不提示(默认)，1全局提示，2产品页提示',
  `represent` varchar(50) NOT NULL DEFAULT '' COMMENT '授权代表',
  `phonenumber` varchar(50) NOT NULL DEFAULT '' COMMENT '代表电话',
  `inscribe_custom` tinyint(1) NOT NULL DEFAULT '0' COMMENT '落款信息是否自定义：1自定义，0默认',
  `nocheck` tinyint(1) NOT NULL DEFAULT '0' COMMENT '无需审核:1是，0否',
  `suspended` int(11) NOT NULL DEFAULT '0' COMMENT '未签订xx天后进行动作',
  `suspended_type` varchar(25) NOT NULL DEFAULT '' COMMENT '未签订合同：类型：suspended暂停，noaccess产品内容页无法访问',
  `remark` varchar(500) NOT NULL DEFAULT '' COMMENT '备注',
  `is_post` tinyint(1) NOT NULL DEFAULT '0' COMMENT '支持邮寄：1是，0否',
  `content` text COMMENT '合同内容',
  `base` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否基础合同：1是，0否',
  `email` varchar(255) NOT NULL DEFAULT '' COMMENT '邮箱',
  `create_time` int(11) NOT NULL DEFAULT '0',
  `update_time` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;
INSERT INTO `shd_configuration`(`setting`, `value`, `create_time`, `update_time`) VALUES
('contract_open',0,UNIX_TIMESTAMP(NOW()),0),
('contract_institutions','',UNIX_TIMESTAMP(NOW()),0),
('contract_phonenumber','',UNIX_TIMESTAMP(NOW()),0),
('contract_consignee_address','',UNIX_TIMESTAMP(NOW()),0),
('contract_postcode','',UNIX_TIMESTAMP(NOW()),0),
('contract_postcode_fee',0,UNIX_TIMESTAMP(NOW()),0),
('contract_number_custom',0,UNIX_TIMESTAMP(NOW()),0),
('contract_number',15,UNIX_TIMESTAMP(NOW()),0),
('contract_number_prefix','',UNIX_TIMESTAMP(NOW()),0),
('contract_pdf_logo','',UNIX_TIMESTAMP(NOW()),0),
('contract_company_logo','',UNIX_TIMESTAMP(NOW()),0);