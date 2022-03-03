CREATE DATABASE FlashCardApp;

USE FlashCardApp;

CREATE TABLE Decks (
id INT AUTO_INCREMENT,
name VARCHAR(200),
created_date DATE,
PRIMARY KEY (id)
);

CREATE TABLE Questions (
id INT AUTO_INCREMENT,
question VARCHAR(200),
answer VARCHAR(200),
created_date DATE,
last_updated DATE,
deck_id INT,
PRIMARY KEY (id),
FOREIGN KEY (deck_id) REFERENCES Decks(id)
);

CREATE TABLE Users (
id INT AUTO_INCREMENT,
name VARCHAR(200),
email VARCHAR(100),
created_date DATE,
PRIMARY KEY (id)
);

CREATE TABLE Sessions (
id INT AUTO_INCREMENT,
created_session DATETIME,
finished_session DATETIME,
user_id INT,
deck_id INT,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES Users(id),
FOREIGN KEY (deck_id) REFERENCES Decks(id)
);

CREATE TABLE Responses (
id INT AUTO_INCREMENT,
created_response DATETIME,
last_updated DATETIME,
response BOOL,
question_id INT,
session_id INT,
PRIMARY KEY (id),
FOREIGN KEY (question_id) REFERENCES Questions(id),
FOREIGN KEY (session_id) REFERENCES Sessions(id)
);

----------------------------------------------------

-- Create these queries:

-- Decks queries

SELECT *
FROM Decks;

INSERT INTO Decks (name, created_date)
VALUES ("Danish/English", "2022-03-01");

INSERT INTO Decks (name, created_date)
VALUES ("Addition/Subtraction", "2022-03-01");

-- Questions queries

SELECT *
FROM Questions;

INSERT INTO Questions (question, answer, created_date, last_updated, deck_id)
VALUES ("almindelig", "ordinary", "2022-03-01", "2022-03-02", 1);

INSERT INTO Questions (question, answer, created_date, last_updated, deck_id)
VALUES ("alvorlig", "serious", "2022-03-01", "2022-03-02", 1);

INSERT INTO Questions (question, answer, created_date, last_updated, deck_id)
VALUES ("afhængig", "dependant", "2022-03-01", "2022-03-02", 1);

INSERT INTO Questions (question, answer, created_date, last_updated, deck_id)
VALUES ("tvang", "force", "2022-03-01", "2022-03-02", 1);

INSERT INTO Questions (question, answer, created_date, last_updated, deck_id)
VALUES ("trivsel", "well-being", "2022-03-01", "2022-03-02", 1);

INSERT INTO Questions (question, answer, created_date, last_updated, deck_id)
VALUES ("tvivl", "doubt", "2022-03-01", "2022-03-02", 1);

INSERT INTO Questions (question, answer, created_date, last_updated, deck_id)
VALUES ("2 + 3", "5", "2022-03-01", "2022-03-02", 11);

INSERT INTO Questions (question, answer, created_date, last_updated, deck_id)
VALUES ("3 + 4", "7", "2022-03-01", "2022-03-02", 11);

INSERT INTO Questions (question, answer, created_date, last_updated, deck_id)
VALUES ("4 + 9", "13", "2022-03-01", "2022-03-02", 11);

-- Users queries

SELECT *
FROM Users;

INSERT INTO Users (name, email, created_date)
VALUES ("Rachel Karen Green", "rachel@fake_email.com", "2022-03-01");

INSERT INTO Users (name, email, created_date)
VALUES ("Chandler Muriel Bing", "chandler@fake_email.com", "2022-03-01");

INSERT INTO Users (name, email, created_date)
VALUES ("Joseph Francis Tribbiani", "joey@fake_email.com", "2022-03-01");

INSERT INTO Users (name, email, created_date)
VALUES ("Ross Eustace Geller", "ross@fake_email.com", "2022-03-01");

INSERT INTO Users (name, email, created_date)
VALUES ("Monica Geller", "monica@fake_email.com", "2022-03-01");

INSERT INTO Users (name, email, created_date)
VALUES ("Phoebe Buffay", "phoebe@fake_email.com", "2022-03-01");

-- Sessions queries

SELECT *
FROM Sessions;

INSERT INTO Sessions (created_session, finished_session, user_id, deck_id)
VALUES ("2022-03-01 08:45:10", "2022-03-01 10:45:10", 1, 1);

INSERT INTO Sessions (created_session, finished_session, user_id, deck_id)
VALUES ("2022-03-02 09:45:10", "2022-03-02 11:45:10", 11, 1);

INSERT INTO Sessions (created_session, finished_session, user_id, deck_id)
VALUES ("2022-03-02 09:45:10", "2022-03-02 11:45:10", 21, 1);

INSERT INTO Sessions (created_session, finished_session, user_id, deck_id)
VALUES ("2022-03-02 09:45:10", "2022-03-02 11:45:10", 31, 11);

INSERT INTO Sessions (created_session, finished_session, user_id, deck_id)
VALUES ("2022-03-02 09:45:10", "2022-03-02 11:45:10", 41, 11);

INSERT INTO Sessions (created_session, finished_session, user_id, deck_id)
VALUES ("2022-03-02 09:45:10", "2022-03-02 11:45:10", 51, 11);

-- Responses queries

SELECT *
FROM Responses;

INSERT INTO Responses (created_response, last_updated, response, question_id, session_id)
VALUES ("2022-03-01 08:47:10", "2022-03-01 08:47:10", 0, 1, 1);

INSERT INTO Responses (created_response, last_updated, response, question_id, session_id)
VALUES ("2022-03-01 08:49:10", "2022-03-01 08:49:10", 1, 11, 1);

INSERT INTO Responses (created_response, last_updated, response, question_id, session_id)
VALUES ("2022-03-01 08:47:10", "2022-03-01 08:47:10", 1, 1, 11);

INSERT INTO Responses (created_response, last_updated, response, question_id, session_id)
VALUES ("2022-03-01 08:49:10", "2022-03-01 08:49:10", 1, 11, 11);

INSERT INTO Responses (created_response, last_updated, response, question_id, session_id)
VALUES ("2022-03-01 08:50:10", "2022-03-01 08:50:10", 1, 21, 11);

----------------------------------------------------




