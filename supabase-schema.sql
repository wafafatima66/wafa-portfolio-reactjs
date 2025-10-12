-- Supabase Database Schema for Portfolio Data
-- Run these commands in your Supabase SQL Editor

-- Academic Projects Table
CREATE TABLE academic_projects (
    id SERIAL PRIMARY KEY,
    role TEXT NOT NULL,
    company TEXT NOT NULL,
    date TEXT NOT NULL,
    description TEXT NOT NULL,
    link TEXT,
    image TEXT,
    technologies TEXT[], -- Array of technologies
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Work Projects Table (renamed from work_projects to projects)
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    role TEXT NOT NULL,
    company TEXT NOT NULL,
    date TEXT NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    basic_info TEXT,
    link TEXT,
    image TEXT,
    technologies TEXT[], -- Array of technologies
    featured BOOLEAN DEFAULT FALSE,
    theme TEXT,
    casestudy_images TEXT[], -- Array of case study images
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials Table
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- About Me Table (Single row configuration)
CREATE TABLE about_me (
    id SERIAL PRIMARY KEY,
    biography TEXT NOT NULL,
    services TEXT NOT NULL,
    contact_email TEXT NOT NULL,
    profile_image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Remove services table as it's now part of about_me

-- Stats Table (for about me stats)
CREATE TABLE stats (
    id SERIAL PRIMARY KEY,
    heading TEXT NOT NULL,
    value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Academic Background Table
CREATE TABLE academic_background (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    institution TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('Education', 'Certification', 'Standardized Exam')),
    text TEXT NOT NULL,
    result TEXT,
    order_sequence INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Timeline Data Table
CREATE TABLE timeline_data (
    id SERIAL PRIMARY KEY,
    date TEXT NOT NULL,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    description TEXT NOT NULL,
    link TEXT,
    sequence_order INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Technologies Table
CREATE TABLE technologies (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    experience INTEGER NOT NULL CHECK (experience >= 0 AND experience <= 100),
    duration INTEGER NOT NULL,
    icon TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add Courses Table (new table based on current data)
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    institution TEXT NOT NULL,
    year TEXT NOT NULL,
    description TEXT NOT NULL,
    skills TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS) for all tables
ALTER TABLE academic_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_me ENABLE ROW LEVEL SECURITY;
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE academic_background ENABLE ROW LEVEL SECURITY;
ALTER TABLE timeline_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access (since this is a portfolio site)
CREATE POLICY "Allow public read access" ON academic_projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON about_me FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON stats FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON academic_background FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON timeline_data FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON technologies FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON courses FOR SELECT USING (true);