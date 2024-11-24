CREATE TABLE IF NOT EXISTS organisations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- User Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    preferences JSONB,
    token VARCHAR(255),              
    type VARCHAR(50),                -- Store the type of credentials ('GoogleCredentials', 'DiscordCredentials', or 'email')
    UNIQUE (token, type)            
);


CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    org_id INT REFERENCES organisations(id) ON DELETE CASCADE,
    event_name VARCHAR(255) NOT NULL,
    event_time INT[] NOT NULL,
    interaction_style TEXT[],
    event_type TEXT[],
    field_of_study TEXT[],
    targeted_years TEXT[],
    extracurricular_types TEXT[],
    social_setting TEXT[],
    academic_interests TEXT[]
);
