-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-04-27 02:44:00
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstitle` char(200) NOT NULL,
  `newstype` char(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` varchar(100) NOT NULL,
  `state` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstitle`, `newstype`, `newsimg`, `newstime`, `newssrc`, `state`) VALUES
(1, 'test', '百家', 'img/1.jpg', '0000-00-00 00:00:00', 'sdfds', 1),
(3, 'test', '娱乐', 'img/3.jpg', '2017-04-06 00:00:00', '333', 1),
(4, 'test2', '百家', 'img/4.jpg', '2017-04-09 00:00:00', '323', 1),
(5, 'test3', '精选', 'img/5.jpg', '2017-04-05 00:00:00', 'sina', 1),
(6, 'test4', '精选', 'img/2.jpg', '2017-04-13 00:00:00', '44', 1),
(7, 'test4', '精选', 'img/12.jpg', '2017-04-19 00:00:00', 'sina', 1),
(8, 'test4', '精选', 'img/10.jpg', '2017-04-18 00:00:00', 'sina', 1),
(10, 'test34', '本地', 'img/1.jpg', '0000-00-00 00:00:00', 'sina', 1),
(11, 'test348', '本地', 'img/7.jpg', '2017-04-08 00:00:00', 'sina', 2),
(13, 'test', '娱乐', 'img/3.jpg', '2017-04-13 00:00:00', 'sina', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
