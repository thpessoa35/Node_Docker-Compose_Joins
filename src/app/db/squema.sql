CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table users(
  	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	name varchar(200) not null,
  	sobre_nome varchar(200) not null,
  	idade integer
);


create table endereco(
  	id_endereco UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  	rua varchar(200) not null, 
  	bairro varchar(200) not null,
  	numero integer not null,
  	cep varchar(200),
  	user_id UUID,
  	foreign key(user_id) references users(id) on delete cascade 
);

CREATE TABLE email (
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  email_id UUID,
  FOREIGN KEY (email_id) REFERENCES users(id) ON DELETE CASCADE
);
