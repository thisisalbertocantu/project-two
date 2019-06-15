DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

DROP DATABASE IF EXISTS fifainfo;
CREATE DATABASE fifainfo;

USE fifainfo;

CREATE TABLE league (
  league_id INT NOT NULL,
  league_name VARCHAR(100) NULL,
  country VARCHAR(100) NULL,
  country_code VARCHAR(100) NULL,
  season DECIMAL(10,4) NULL,
  logo VARCHAR(100) NULL,
  flag VARCHAR(100) NULL,
  PRIMARY KEY (league_id)
);

SELECT * FROM fifainfo;
