-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-08-2017 a las 10:07:42
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `provincias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id` int(11) NOT NULL,
  `valor` char(2) NOT NULL,
  `texto` varchar(50) NOT NULL,
  `seleccionada` enum('S','N') NOT NULL,
  `habilitada` enum('S','N') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id`, `valor`, `texto`, `seleccionada`, `habilitada`) VALUES
(1, '01', 'Álava', 'S', 'S'),
(2, '02', 'Albacete', 'N', 'N'),
(3, '03', 'Alicante', 'N', 'S'),
(4, '04', 'Almería', 'S', 'S'),
(5, '05', 'Ávila', 'N', 'S'),
(6, '06', 'Badajoz', 'N', 'S'),
(7, '07', 'Baleares', 'N', 'S'),
(8, '08', 'Barcelona', 'S', 'S'),
(9, '09', 'Burgos', 'S', 'S'),
(10, '10', 'Cáceres', 'S', 'S'),
(11, '11', 'Cádiz', 'N', 'S'),
(12, '12', 'Castellón', 'S', 'N'),
(13, '51', 'Ceuta', 'S', 'S'),
(14, '13', 'Ciudad Real', 'S', 'S'),
(15, '14', 'Córdoba', 'N', 'S'),
(16, '15', 'Coruña', 'N', 'S'),
(17, '16', 'Cuenca', 'N', 'S'),
(18, '17', 'Gerona', 'S', 'S'),
(19, '18', 'Granada', 'S', 'S'),
(20, '19', 'Guadalajara', 'N', 'S'),
(21, '20', 'Guipúzcoa', 'N', 'S'),
(22, '21', 'Huelva', 'N', 'S'),
(23, '22', 'Huesca', 'S', 'S'),
(24, '23', 'Jaen', 'N', 'S'),
(25, '24', 'León', 'N', 'N'),
(26, '25', 'Lérida', 'S', 'N'),
(27, '26', 'La Rioja', 'S', 'N'),
(28, '27', 'Lugo', 'S', 'S'),
(29, '28', 'Madrid', 'S', 'S'),
(30, '29', 'Málaga', 'S', 'S'),
(31, '52', 'Melilla', 'N', 'S'),
(32, '30', 'Murcia', 'N', 'S'),
(33, '31', 'Navarra', 'N', 'S'),
(34, '32', 'Orense', 'S', 'S'),
(35, '33', 'Asturias', 'S', 'S'),
(36, '34', 'Palencia', 'S', 'S'),
(37, '35', 'Las Palmas', 'N', 'S'),
(38, '36', 'Pontevedra', 'N', 'N'),
(39, '37', 'Salamanca', 'N', 'S'),
(40, '38', 'S.C. Tenerife', 'S', 'S'),
(41, '39', 'Cantabria', 'S', 'S'),
(42, '40', 'Segovia', 'S', 'S'),
(43, '41', 'Sevilla', 'S', 'S'),
(44, '42', 'Soria', 'S', 'S'),
(45, '43', 'Tarragona', 'N', 'S'),
(46, '44', 'Teruel', 'N', 'N'),
(47, '45', 'Toledo', 'S', 'N'),
(48, '46', 'Valencia', 'N', 'S'),
(49, '47', 'Valladolid', 'N', 'S'),
(50, '48', 'Vizcaya', 'N', 'S'),
(51, '49', 'Zamora', 'N', 'S'),
(52, '50', 'Zaragoza', 'S', 'N');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
