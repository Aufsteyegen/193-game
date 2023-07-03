CREATE DATABASE webgame193;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password_hash VARCHAR(255),
    salt VARCHAR(255),
    wins INTEGER UNSIGNED,
    total_guesses INTEGER UNSIGNED,
    correct_guesses INTEGER UNSIGNED,
    best_win_time INTEGER UNSIGNED,
    description VARCHAR(255)
);
