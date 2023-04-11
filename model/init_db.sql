DROP TABLE IF EXISTS users;
SET foreign_key_checks = 0;
SET foreign_key_checks = 1;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT , 
    name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    avatar VARCHAR(200)
);

-- remember to create favorites after users, or this will show an error message cause user_id won't be create yet

INSERT INTO users
VALUES 
(1,"jim","jim@nuggetlove.com","$2a$12$BDxZviP5nIvS6stEGg.ftuhoneUwIG9Je8ws03Q5NSsm745HNMVI2","./public/images/av1.png"), 
(2,"dodo","dodo@nugget.com","$2a$12$rgqr1bN5.CkvI/fVQBSrnu2sGFcL36f3Xjj2cC.Ev569bJ5DXOyMi","./public/images/av3.png"), 
(3,"winnie","winnie@nugget.com","$2a$12$7js6Wj4qp4gLmYj4h9BZXerRAVn3cdn04R0idFSujI93W6a0UCa4y","./public/images/av2.png"),
(4, "minion", "minion@nugget.com", "$2a$12$XMEKN7hM19N0dJYlPUn9cultdV2iYmKcHjm4FQM0wF1qj1jddRXqu","./public/images/av9.png");

-- INSERT INTO users
-- VALUES 
-- (5,"vic","vic@nuggetlove.com","123","./public/images/av1.png")