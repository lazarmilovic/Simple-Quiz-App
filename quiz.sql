-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 09, 2020 at 05:03 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(4) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer1` varchar(255) NOT NULL,
  `answer2` varchar(255) NOT NULL,
  `answer3` varchar(255) NOT NULL,
  `answer4` varchar(255) NOT NULL,
  `correct_answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `correct_answer`) VALUES
(1, 'What flower is the symbol of the sun and the symbol of Japan?', 'Chrysanthemum', 'Rose ', 'Lily', 'Sea Lavender', 'Chrysanthemum'),
(2, 'In which European city can you find the home of Anne Frank?', 'Berlin', 'Amsterdam', 'Munich', 'Bern', 'Amsterdam'),
(3, 'Which two months are named after Roman emperors?', 'June and July', 'June and August ', 'May and July', 'July and August', 'July and August'),
(4, 'How many stars feature on the flag of New Zealand?', 'Four ', 'Five', 'Three ', 'Six', 'Four'),
(5, 'What is both a French wine region and a luxury American automobile?', 'Ford', 'Cadillac', 'Chrysler', 'Chevrolet', 'Cadillac'),
(6, 'What used to be the currency of Italy?	', 'Lira', 'Pesos', 'Dollar', 'Drachma', 'Lira'),
(7, 'Where was built the first subway?	', 'London', 'Paris', 'Berlin', 'Madrid', 'London'),
(8, 'In what year was the Berlin wall built?', '1961.', '1958.', '1964.', '1971.', '1961.'),
(9, 'In which country happened the Orange Revolution between 2004-2005?', 'Ukraine', 'Moldova', 'Poland', 'Belarus', 'Ukraine'),
(10, 'Which country had a Prime Minister and President who were twin brothers?', 'Poland', 'Slovakia', 'Hungary', 'Croatia', 'Poland'),
(11, 'In which house does the American president live?', 'The White House', 'The Green House', 'The Red House', 'The Black House', 'The White House'),
(12, 'For which state did Arnold Schwarzenegger become governor in November 2003?', 'California', 'Texas', 'Oregon', 'New York', 'California'),
(13, 'How many oscars did the Titanic movie got?', 'Ten', 'Eleven', 'Twelve ', 'Nine', 'Eleven'),
(14, 'What was the former name of New York?', 'New Amsterdam', 'New Boston', 'New Jersey ', 'New Madrid', 'New Amsterdam'),
(15, 'Which country was formerly called Ceylon?', 'East Timor', 'Indonesia', 'Sri Lanka', 'Laos', 'Sri Lanka'),
(16, 'Xerxes ruled a great empire around the fifth century BC. Which empire?', 'The Greek empire ', 'The Ottoman Empire ', 'The Rome Empire ', 'The Persian empire', 'The Persian empire'),
(17, 'What was the name of the Protestant revolution against the domination of the Pope?', 'Reincarnation', 'Reformation', 'Rebelion ', 'Inquisition', 'Reformation'),
(18, 'In which city was the Titanic built?', 'Glasgow', 'Belfast', 'London', 'Manchester', 'Belfast'),
(19, 'How matches did Muhammed Ali lose in his career?', 'None', 'One', 'Two ', 'Three', 'One'),
(20, 'What was the Olympic city of 1992 ?', 'Barcelona', 'Paris', 'Rome', 'London', 'Barcelona'),
(21, 'How many times has Michael Schumacher been a Formula 1 champion?', '7 times ', '5 times ', '8 times ', '6 times ', '7 times ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
