create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

create TABLE document(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);