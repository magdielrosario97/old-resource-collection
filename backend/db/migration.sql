DROP DATABASE IF EXISTS mcsp_resources;

CREATE DATABASE mcsp_resources;
\c mcsp_resources
DROP TABLE IF EXISTS member;
DROP TABLE IF EXISTS post;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    fullname VARCHAR(155),
    email VARCHAR(155),
    username TEXT UNIQUE NOT NULL,
    cohort TEXT,
    isAdmin BOOLEAN,
    isStaff BOOLEAN
);

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    link TEXT,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
);

\i seed.sql