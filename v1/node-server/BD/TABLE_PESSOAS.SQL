CREATE TABLE `pessoas` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `endereco_complemento` varchar(255) NOT NULL,
  `endereco_cidade` varchar(255) NOT NULL,
  `endereco_estado` varchar(2) NOT NULL,
  `endereco_CEP` varchar(255) NOT NULL,
  `is_deleted` tinyint(3) unsigned DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8