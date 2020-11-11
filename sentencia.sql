-- Base de datos: `test`
-- --------------------------------------------------------
-- Estructura de tabla para la tabla `registration_user`

DATABASE CREATE test;
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