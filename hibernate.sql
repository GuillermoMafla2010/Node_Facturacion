-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-08-2019 a las 23:50:28
-- Versión del servidor: 10.1.25-MariaDB
-- Versión de PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hibernate`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'Comida', '2019-06-18 10:20:26', '2019-06-18 10:20:26'),
(2, 'Bebidas_Alcoholicas', '2019-06-18 10:20:36', '2019-06-18 10:20:36'),
(3, 'Perfumeria', '2019-06-18 17:20:03', '2019-06-18 17:20:03'),
(4, 'Libreria', '2019-06-18 18:11:42', '2019-06-18 18:11:42'),
(5, 'Infantil', '2019-06-18 18:11:50', '2019-06-18 18:11:50'),
(6, 'Adultos', '2019-06-18 18:11:57', '2019-06-18 18:11:57'),
(7, 'Automovilistica', '2019-06-18 18:12:10', '2019-06-18 18:12:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'Cristian Jativa', '2019-06-18 03:06:48', '2019-06-18 17:14:45'),
(2, 'Michelle Davila', '2019-06-18 17:15:03', '2019-06-18 17:15:03'),
(3, 'Eydan Jativa', '2019-06-18 17:15:12', '2019-06-18 17:15:12'),
(4, 'Arleth Leiva', '2019-06-18 17:15:19', '2019-06-18 17:15:19'),
(5, 'Gustavo Baroja', '2019-06-18 17:15:28', '2019-06-18 17:15:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallefacturas`
--

CREATE TABLE `detallefacturas` (
  `id` int(11) NOT NULL,
  `facturaid` int(11) DEFAULT NULL,
  `productoid` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `detallefacturas`
--

INSERT INTO `detallefacturas` (`id`, `facturaid`, `productoid`, `cantidad`, `createdAt`, `updatedAt`) VALUES
(1, 1, 11, 147, '2019-06-18 17:18:33', '2019-06-18 17:18:33'),
(2, 1, 8, 15, '2019-06-18 17:18:33', '2019-06-18 17:18:33'),
(3, 1, 12, 3, '2019-06-18 17:18:33', '2019-06-18 17:18:33'),
(4, 1, 9, 3, '2019-06-18 17:18:33', '2019-06-18 17:18:33'),
(5, 2, 14, 2, '2019-06-18 17:24:41', '2019-06-18 17:24:41'),
(6, 2, 16, 1, '2019-06-18 17:24:41', '2019-06-18 17:24:41'),
(7, 2, 15, 5, '2019-06-18 17:24:41', '2019-06-18 17:24:41'),
(8, 3, 30, 2, '2019-06-18 18:23:59', '2019-06-18 18:23:59'),
(9, 3, 19, 1, '2019-06-18 18:23:59', '2019-06-18 18:23:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `clienteid` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`id`, `nombre`, `clienteid`, `createdAt`, `updatedAt`) VALUES
(1, 'Compra Enero', 1, '2019-06-18 17:18:33', '2019-06-18 17:18:33'),
(2, 'Compra Perfumes', 1, '2019-06-18 17:24:41', '2019-06-18 17:24:41'),
(3, 'Compra Intima', 2, '2019-06-18 18:23:59', '2019-06-18 18:23:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fechas`
--

CREATE TABLE `fechas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `paisid` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoriaid` int(11) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `createdAt`, `updatedAt`, `categoriaid`, `foto`) VALUES
(8, 'Ceviche de Camaron', 7, '2019-06-18 10:22:19', '2019-06-18 10:22:19', 1, '5b433c79-a85b-4f3f-a823-963299681085_ceviche-de-camaron-estilo-nayarit.jpg'),
(9, 'Cerveza Pilsener', 1.25, '2019-06-18 10:24:18', '2019-06-18 10:24:18', 2, '29b3c051-406c-4be8-9533-f175ef6fc59d_a8accd6fbc566d994f5067990c6c6c11.jpg'),
(10, 'Cerveza Club', 1.5, '2019-06-18 10:24:35', '2019-06-18 10:24:35', 2, 'c92c6592-b24c-439b-a354-aec04a28917e_images.jpg'),
(11, 'Cerveza Corona', 1.5, '2019-06-18 10:25:11', '2019-06-18 10:25:11', 2, '8ad74cbc-0535-47d2-82de-1c32a774ff87_cerveza-corona-porron-D_NQ_NP_467515-MLA25266642709_012017-F.jpg'),
(12, 'Sopa Marinera', 8.5, '2019-06-18 10:25:57', '2019-06-18 10:25:57', 1, '03cd8eb1-a15c-44d5-96c8-5abef00d6e52_sopa-marinera.jpg'),
(13, 'Joop', 70, '2019-06-18 17:22:17', '2019-06-18 17:22:17', 3, '5d1382a9-da83-47d4-968d-2150b7fce909_375x500.1251.jpg'),
(14, 'Adrenaline', 30, '2019-06-18 17:22:40', '2019-06-18 17:22:40', 3, '51393403-64c8-4490-bab6-4d95b00d1b3d_20004002-01.jpg'),
(15, 'Boss Botled', 91, '2019-06-18 17:22:57', '2019-06-18 17:22:57', 3, 'b0b2d585-762a-4208-8063-307c16ff7dc1_375x500.383.jpg'),
(16, 'Osadia Fuego', 40, '2019-06-18 17:23:16', '2019-06-18 17:23:16', 3, '6f5542b5-0e02-43d7-afce-1fd3e3fa5c48_3338035_orig.jpg'),
(17, 'Tapado Arrecho', 10, '2019-06-18 18:09:27', '2019-06-18 18:09:27', 1, 'e7ce4975-49a4-4d57-8eda-f4533d276c14_descarga.jpg'),
(18, 'Kia Rio', 24000, '2019-06-18 18:15:03', '2019-06-18 18:15:03', 7, 'e1411cd1-0b20-414f-b7d3-4011da23e19b_2018_Kia_Rio_EX_-_Side.jpg'),
(19, 'Santa Fe', 36000, '2019-06-18 18:15:19', '2019-06-18 18:15:19', 7, '7cb6f525-2d1b-42ee-88aa-a1ddbcc875a4_santafe.jpg'),
(20, 'Lamborghini Diablo', 420000, '2019-06-18 18:15:42', '2019-06-18 18:15:42', 7, 'f3459b29-9069-49fe-af00-c2ca0777ff19_diablo.jpg'),
(21, 'La Odisea', 15, '2019-06-18 18:15:57', '2019-06-18 18:15:57', 4, 'de19a114-b86e-4892-8fe3-69d2f17b33bb_laodisea.jpg'),
(22, 'The Amazing Spiderman', 35, '2019-06-18 18:16:24', '2019-06-18 18:16:24', 4, '3807ef91-288c-4b13-9dcb-297837330fbf_spiderman.jpeg'),
(23, 'Tom Sawyer', 16, '2019-06-18 18:17:12', '2019-06-18 18:17:12', 4, 'f5e3fd76-6e78-4dd7-8451-416b2b5d7fe5_tom sawyer.jpg'),
(24, 'El extranjero', 4, '2019-06-18 18:18:04', '2019-06-18 18:18:04', 4, 'b992aaf0-24cc-4d30-b014-d26aa2c00aa9_elextranjero.jpg'),
(25, 'Records Mundiales Guiness', 14, '2019-06-18 18:19:10', '2019-06-18 18:19:10', 4, '45c6f4e9-7b4a-4ce7-8d7b-380f5a119f0a_guinness.jpg'),
(26, 'La Linares', 6, '2019-06-18 18:19:50', '2019-06-18 18:19:50', 4, 'ea46ad3b-4765-48d8-8b13-0ee221b1e6aa_linares.jpg'),
(27, 'Viaje al centro de la Tierra', 16, '2019-06-18 18:20:28', '2019-06-18 18:20:28', 4, 'e9594481-599a-48b1-b19f-e7cb317de7d0_centgro.jpg'),
(28, 'La divina Comedia', 5, '2019-06-18 18:21:05', '2019-06-18 18:21:05', 4, '6783f24b-3fe3-4b56-aabb-9b273bc0342c_comedia.jpg'),
(29, 'Las Fabulas de Esopo', 2, '2019-06-18 18:21:43', '2019-06-18 18:21:43', 4, '7b291060-96d0-4295-ac34-b862253309f4_esopp.jpg'),
(30, 'Bolitas Chinas', 45, '2019-06-18 18:22:19', '2019-06-18 18:22:19', 6, '128956c0-93ae-4798-976a-10d3f83f51d7_bolas.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `paisid` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'ROLE_ADMIN', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'ROLE_USER', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20190513211348-create-categorias.js'),
('20190514151218-create-roles.js'),
('20190530165715-create-pais.js'),
('20190530165907-create-persona.js'),
('20190530170335-create-provincia.js'),
('20190530180613-create-clientes.js'),
('20190530182302-create-facturas.js'),
('20190530182621-create-productos.js'),
('20190530183337-create-detalle-facturas.js'),
('20190613212608-create-fechas.js'),
('20190614151137-create-usuarios.js'),
('20190614151157-create-usuarios-roles.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `password`, `createdAt`, `updatedAt`) VALUES
(3, 'Michelle', '$2b$10$F5yT63OFNcA9E.sAMwiVVebf1lx3cdc/f1VvBdw1uTiD7B9ckW29i', '2019-06-18 16:56:51', '2019-06-18 16:56:51'),
(4, 'Paco', '$2b$10$2LkzFTsAb2EfO/9giB0VuuDL6h/tqYamKufa0VtKGJ2Jx.65l6tUa', '2019-06-18 16:57:09', '2019-06-18 16:57:09'),
(5, 'Guillermo', '$2b$10$O257y6/hJbSw73KylEAtduUAj2FuBXX7LQgnnzpRsRKeLeaainXXi', '2019-06-18 16:57:21', '2019-06-18 16:57:21'),
(6, 'Pablito', '$2b$10$bp4KRSiA/2eLEA9ZkUIUNeTAbEeOek5EIRqgMRGJUn8IHis9NM0T6', '2019-06-18 16:57:29', '2019-06-18 16:57:29'),
(7, 'Eydan', '$2b$10$kkoEtmzucLHhi1MnSG2KlOmKts7g3lCluhvmOwsKm0zCIfeZCecai', '2019-06-18 16:57:37', '2019-06-18 16:57:37'),
(8, 'Mashita', '$2b$10$o4N94u4ff0XSw6rjx6HCn.Lh./e4vE7N8emoEfEYHMVY63I2rHrDm', '2019-06-18 16:57:46', '2019-06-18 16:57:46'),
(9, 'Cristian', '$2b$10$G63IqW7WtBe/rcKyEM1XUer99F./31jx519fz9/AKwK6KUnzLd37m', '2019-06-18 16:59:54', '2019-06-18 16:59:54'),
(16, 'Juan', '$2b$10$hv/VI0DQGswHfqmEK5qMpeXcjFZtkND6R9V8JVtE3ujKyGjpoz3eu', '2019-06-18 21:21:11', '2019-06-18 21:21:11'),
(17, 'Jessy', '$2b$10$QH/nvI/zZ1aOxMfSq53o2etcOEcezzU2Gi0wbH5Nah4hFD8Qv8l7u', '2019-06-18 21:21:12', '2019-06-18 21:21:12'),
(186, 'Diana', '$2b$10$244DUUZB5FjoUF2.gHoSmOiw5XG1ixKuJCgxHapy4771lf6blh2dC', '2019-06-19 16:04:10', '2019-06-19 16:04:10'),
(187, 'Hilda', '$2b$10$TnPhFaqkwdJUMj3KHEqkuuJ4JmThJ713XJYnZeFo.Lu0QaURft9W.', '2019-06-19 16:04:10', '2019-06-19 16:04:10'),
(188, 'Susana', '$2b$10$/ZELwvsW6O8eKNuT8dQghuyxJ3DrXk8n75E5zeN7mWxrXnEeuDhre', '2019-06-19 16:04:11', '2019-06-19 16:04:11'),
(189, 'Lidia', '$2b$10$BXQCIgV6Krg1sv9.HunHSu1aqvLDGbebuUsD0HsnDBsuzzh1ENkoi', '2019-06-19 16:04:11', '2019-06-19 16:04:11'),
(190, 'Diana', '$2b$10$k2wZtpvXVBB.EFeq7.VAOONututtaNDOrbKbbJA0Qdh9tXcujYUAG', '2019-06-19 16:04:32', '2019-06-19 16:04:32'),
(191, 'Hilda', '$2b$10$kjQAbli8BlJp.lFomh14X.w6x/tSvC67pmIgUmWwECit1ZiQ2mhqW', '2019-06-19 16:04:32', '2019-06-19 16:04:32'),
(192, 'Susana', '$2b$10$PovfKiaFRJ7MI3atiKMkcO6QNOXlH5LZRlaD2MznbQOjpjO2PviSu', '2019-06-19 16:04:32', '2019-06-19 16:04:32'),
(193, 'Lidia', '$2b$10$tHdT6LA0G/s8Uk.PEnCvBODXKMjwerC0.Wexy8A45pkvpRlwfWeoa', '2019-06-19 16:04:32', '2019-06-19 16:04:32'),
(194, 'Diana', '$2b$10$26vJpQxZbfCCTHRissU85OPb/Ulhkdc0Z3rXvhMm/WnyHalAEuoEO', '2019-06-19 16:07:32', '2019-06-19 16:07:32'),
(195, 'Hilda', '$2b$10$s6CFqgSspBi7DGuOAPoxU.iQl3YpClXw0/ogbZTmuNMydCexazvc.', '2019-06-19 16:07:32', '2019-06-19 16:07:32'),
(196, 'Susana', '$2b$10$YZ/k2SYoQs2Oue0GWaRjcO6TxFiOIokllye.672RP99un4Y8TySzS', '2019-06-19 16:07:32', '2019-06-19 16:07:32'),
(197, 'Lidia', '$2b$10$Ce6AWxiJe70h5t/Mp5I1HOSIjtOIBnbc13GWo4S1oRpYvzIX33NCu', '2019-06-19 16:07:32', '2019-06-19 16:07:32'),
(198, 'Diana', '$2b$10$WhC1tRd8hxKlXJV5MppHO.TDvoBWW6lOfCFsczyMpxCUVvPzSp8KG', '2019-06-19 16:08:04', '2019-06-19 16:08:04'),
(199, 'Hilda', '$2b$10$UOljbq55WpclpA9Bas4AH.YfMlL9Rqb.bDrAfzD12acT6xrUjNYn2', '2019-06-19 16:08:04', '2019-06-19 16:08:04'),
(200, 'Susana', '$2b$10$T5Od22V3ZgnazLxkTy0bfegXyz9OqKOTcC/jeOO3Af0OfPYAgcRum', '2019-06-19 16:08:04', '2019-06-19 16:08:04'),
(201, 'Lidia', '$2b$10$6HdFGwBVPzgZzfs.Ut8Z7O0Q3yWFq/wZXZKdPV9Vy8DVZk.gghgZu', '2019-06-19 16:08:05', '2019-06-19 16:08:05'),
(202, 'Diana', '$2b$10$AN4caWGM4rOz6mv.8F4jUu0kLcuAwtIPJ1sJ33dcfPj3sqFVgwmvK', '2019-06-19 16:08:15', '2019-06-19 16:08:15'),
(203, 'Hilda', '$2b$10$RqlnC5gc58yJIkCoGDrQlOL94TXKQCAHEhDLaRdNWDULb692815XK', '2019-06-19 16:08:15', '2019-06-19 16:08:15'),
(204, 'Susana', '$2b$10$21qZA6rbrBBqnX/w/N.TMueeprRvNDQeEoW53hcn.sF05SyTNkyBC', '2019-06-19 16:08:15', '2019-06-19 16:08:15'),
(205, 'Lidia', '$2b$10$7uPoG1uG3igbbkeq4bTtWeL9Hbz90bFp5yMwwc7.Nx//YjGcBcMMK', '2019-06-19 16:08:15', '2019-06-19 16:08:15'),
(206, 'Diana', '$2b$10$Ty.qbdYPzvFnLBu4wt8U7Ow0gFoO.3ZzPbh63Gf86oOZ9ejM/V.OK', '2019-06-19 16:09:26', '2019-06-19 16:09:26'),
(207, 'Hilda', '$2b$10$eThyiHuh29CIte73I6iNhursEWJkw2hqj8yf3gnPybOERJSgo7Iby', '2019-06-19 16:09:26', '2019-06-19 16:09:26'),
(208, 'Susana', '$2b$10$OE3BQ24Arxig1/zuUJ46Te1pVA3DS0IrOMnuvP/owL7bURB0/GAFe', '2019-06-19 16:09:27', '2019-06-19 16:09:27'),
(209, 'Lidia', '$2b$10$mVMn.KR1Ayi/7c2xVq2uMOIV3oha.5XX3.RJPN/w2kox5pJoe7D9m', '2019-06-19 16:09:27', '2019-06-19 16:09:27'),
(210, 'Diana', '$2b$10$9mPETSRxqcZoR57K1rM9H.cfYGSz7mS69iQ.Gavi.488CF5NSZtcO', '2019-06-19 16:09:48', '2019-06-19 16:09:48'),
(211, 'Hilda', '$2b$10$mlPMCXprqcFFL/jmPXrtNe2NSbu2wo1x7phRYiqzUyXyXUSTFU5BG', '2019-06-19 16:09:48', '2019-06-19 16:09:48'),
(212, 'Susana', '$2b$10$cI1I7mv4K28YN3SRrtitduZTw0lTZFkrMiWtyAPqV12W3DP7zPGFe', '2019-06-19 16:09:48', '2019-06-19 16:09:48'),
(213, 'Lidia', '$2b$10$UblclOtUabKxdSmnX6i60O88YAXvGD7n01Dkqp4VwtDCoE9MJzD7e', '2019-06-19 16:09:49', '2019-06-19 16:09:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_roles`
--

CREATE TABLE `usuarios_roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `usuarioid` int(11) DEFAULT NULL,
  `roleid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios_roles`
--

INSERT INTO `usuarios_roles` (`id`, `nombre`, `createdAt`, `updatedAt`, `usuarioid`, `roleid`) VALUES
(1, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 3, 2),
(2, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 4, 2),
(3, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5, 2),
(4, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 6, 2),
(5, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 7, 2),
(6, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 8, 2),
(9, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 9, 1),
(10, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 9, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detallefacturas`
--
ALTER TABLE `detallefacturas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `facturaid` (`facturaid`),
  ADD KEY `productoid` (`productoid`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clienteid` (`clienteid`);

--
-- Indices de la tabla `fechas`
--
ALTER TABLE `fechas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `paisid` (`paisid`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoriaid` (`categoriaid`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `paisid` (`paisid`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioid` (`usuarioid`),
  ADD KEY `rolid` (`roleid`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `detallefacturas`
--
ALTER TABLE `detallefacturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `fechas`
--
ALTER TABLE `fechas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=214;
--
-- AUTO_INCREMENT de la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detallefacturas`
--
ALTER TABLE `detallefacturas`
  ADD CONSTRAINT `detallefacturas_ibfk_1` FOREIGN KEY (`facturaid`) REFERENCES `facturas` (`id`),
  ADD CONSTRAINT `detallefacturas_ibfk_2` FOREIGN KEY (`productoid`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD CONSTRAINT `facturas_ibfk_1` FOREIGN KEY (`clienteid`) REFERENCES `clientes` (`id`);

--
-- Filtros para la tabla `personas`
--
ALTER TABLE `personas`
  ADD CONSTRAINT `personas_ibfk_1` FOREIGN KEY (`paisid`) REFERENCES `pais` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoriaid`) REFERENCES `categorias` (`id`);

--
-- Filtros para la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD CONSTRAINT `provincia_ibfk_1` FOREIGN KEY (`paisid`) REFERENCES `pais` (`id`);

--
-- Filtros para la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  ADD CONSTRAINT `usuarios_roles_ibfk_1` FOREIGN KEY (`usuarioid`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `usuarios_roles_ibfk_2` FOREIGN KEY (`roleid`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
