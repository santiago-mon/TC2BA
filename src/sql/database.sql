create database logs;

use logs;

create table users(
    id int not null primary key auto_increment,
    correo varchar(50) not null unique,
    nombre varchar(80) not null ,
    celular varchar(15) not null,
    comuna varchar(20) not null,
    direccion varchar(50) not null,
    nacimiento date not null,
    pass varchar(30) not null,
    rol varchar(20) default 'cliente'
);

describe users;