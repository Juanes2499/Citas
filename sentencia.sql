-- Base de datos: `test`
-- --------------------------------------------------------
-- Estructura de tabla para la tabla `registration_user`

DATABASE CREATE salud_eps;
DROP TABLE IF EXISTS `registration_user`;
CREATE TABLE IF NOT EXISTS `registration_user` (
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `genero` varchar(2) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `numero` float NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `agendar_citas` (
  	`id` int(11) NOT NULL AUTO_INCREMENT,
	`tipo_id` int(50) NOT NULL,
 	`num_id` varchar(50) NOT NULL,
  	`eps` varchar(50) NOT NULL,
  	`email` varchar(100) NOT NULL,
  	`fecha_cita` datetime NOT NULL,
  	`estado_cita` varchar(2),
  	PRIMARY KEY (`id`)
);


CREATE TABLE IF NOT EXISTS `medicamentos` (
  	`id` int(11) NOT NULL AUTO_INCREMENT,
	`tipo_medicamento` varchar(100) NOT NULL,
 	`nombre_medicamento` varchar(100) NOT NULL,
  	`descripcion_med` varchar(1000) NOT NULL,
  	`precio_med` double NOT NULL,
  	`proveedor` varchar(100) NOT NULL,
  	`stock_med` int(11) NOT NULL,
  	PRIMARY KEY (`id`)
);


select * from agendar_citas;

select * from registration_user;

delete from agendar_citas where tipo_id=2 and num_id='1107527844' and fecha_cita = '2020/11/13';

insert into agendar_citas (tipo_id,num_id,eps,email,fecha_cita) values (1,'1107527844','Nueva EPS', 'juanesnilarra@gmail.com','2020/11/28');