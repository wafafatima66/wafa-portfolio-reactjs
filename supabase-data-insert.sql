-- Insert data into Supabase tables
-- Run these commands after creating the schema

-- Insert Academic Projects
INSERT INTO academic_projects (role, company, date, description, link, image) VALUES
('Researcher', 'Predicting Programming Language Tags for Stack Overflow Questions', 'GitHub', 'Built a predictive multi-class classification model to classify programming language tags (Python, Java, JavaScript, C#) using Stack Overflow data. Implemented a neural network with Keras achieving 74% accuracy while overcoming overfitting and activation function challenges.', 'https://github.com/wafafatima66/Predicting-tags-using-multiclass-classification.git', '/images/projects/stack-overflow-tags.png'),
('Researcher', 'Classification ML model using RNN and LSTM in TensorFlow', 'GitHub', 'Implemented classification models using RNN and LSTM architectures in TensorFlow, achieving accuracies of 83% and 84% respectively.', 'https://github.com/wafafatima66/RNN-LSTM-TensorFlow', '/images/projects/rnn-lstm.png'),
('Researcher', 'Predicting ML model using Feedforward Neural Network', 'GitHub', 'Built a Feedforward Neural Network model on diabetes data achieving 74% accuracy with improved optimization techniques.', 'https://github.com/wafafatima66/Feedforward-Neural-network-TensorFlow-Diabetes-Data', '/images/projects/feedforward.png');

-- Insert Work Projects
INSERT INTO work_projects (role, company, date, description, link, image) VALUES
('Full Stack Developer', 'BerriesHut (E-commerce Site)', 'GitHub', 'Designed and developed a fully functional e-commerce site, enhancing user experience and streamlining online transactions.', 'https://github.com/wafafatima66/berrieshut', '/images/projects/berrieshut.png'),
('Developer', 'Tweety (Twitter Clone)', 'GitHub', 'Developed a Twitter clone replicating user profiles, tweeting, following, and real-time updates for enhanced social interaction.', 'https://github.com/wafafatima66/tweety', '/images/projects/tweety.png'),
('Game Developer', 'Rock Scissor Paper Game', 'GitHub', 'Created an interactive Rock, Paper, Scissors game with engaging UI, real-time gameplay, and a dynamic scoring system.', 'https://github.com/wafafatima66/rock-paper-scissor', '/images/projects/rsp-game.png'),
('Game Developer', 'Rock Scissor Paper & Quiz Game', 'GitHub', 'Extended Rock, Paper, Scissors with a quiz feature, combining entertainment with learning through an interactive interface.', 'https://github.com/wafafatima66/rock-paper-scissor-quiz-app-python', '/images/projects/rsp-quiz.png'),
('Backend Developer', 'Minimal Chatbot App', 'GitHub', 'Developed a chatbot app with Node.js, Express, and MongoDB. Messages are stored in MongoDB, demonstrating full-stack development basics.', 'https://github.com/wafafatima66/furniture-website-html-nodejs', '/images/projects/chatbot.png');

-- Insert Testimonials
INSERT INTO testimonials (name, title, text, image) VALUES
('James Carter', 'CTO at TechWave', 'Fatima delivered high-quality solutions on time and demonstrated strong problem-solving skills throughout the project.', 'https://i.pravatar.cc/150?img=12'),
('Alicia Gomez', 'Project Manager at Docua', 'Her expertise in software development and teamwork made a huge difference in the successful launch of our product.', 'https://i.pravatar.cc/150?img=36'),
('Robert Wilson', 'Business Owner', 'The e-commerce website she developed boosted our sales by improving user experience and system efficiency.', 'https://i.pravatar.cc/150?img=18'),
('Sophia Lee', 'Research Collaborator', 'Her work on machine learning models showed exceptional technical depth and attention to detail.', 'https://i.pravatar.cc/150?img=52');

-- Insert About Me
INSERT INTO about_me (biography_heading, biography_content, contact_heading, contact_details, services_heading, profile_image) VALUES
('Biography', 'I am Fatima Amir, a software engineer passionate about building intelligent solutions and innovative web applications. My expertise lies in machine learning, full-stack development, and research-driven problem solving. I enjoy turning complex problems into simple, scalable solutions that make a real impact.', 'Contact', 'Dhaka, Bangladesh\nfatimaamir.dev@gmail.com', 'Services', '/your-photo.png');

-- Insert Services
INSERT INTO services (service_name) VALUES
('Machine Learning Solutions'),
('Full-Stack Web Development'),
('Custom WordPress Development'),
('E-commerce Development'),
('Software Project Management');

-- Insert Stats
INSERT INTO stats (heading, value) VALUES
('Years of Experience', '5+'),
('Projects Done', '30+');

-- Insert Academic Background
INSERT INTO academic_background (title, institution, type, text) VALUES
('MSc in Computer Science and Engineering', 'Military Institute of Science and Technology', 'Education', 'Focused on advanced machine learning, artificial intelligence, and data-driven solutions while gaining practical experience in research and applied computer science.'),
('BSc in Computer Science and Engineering', 'Shanto Mariam University of Creative Technology', 'Education', 'Gained a strong foundation in software development, algorithms, database systems, and programming across multiple languages.'),
('DevOps Specialization', 'Coursera', 'Certification', 'Learned continuous integration, deployment, monitoring, and cloud-based DevOps workflows to streamline development pipelines.'),
('Python for Everybody', 'Free Code Camp', 'Certification', 'Mastered Python fundamentals, data handling, web scraping, and API interaction for real-world problem solving.'),
('IELTS', 'IDP', 'Standardized Exam', '7.5/9'),
('GRE', 'ETS', 'Standardized Exam', '289/340'),
('HSC (12th) - CBSE', 'New Indian Model School, Sharjah, U.A.E', 'Education', '89%');

-- Insert Timeline Data
INSERT INTO timeline_data (date, title, location, description, link) VALUES
('2023 - Present', 'Project Manager', 'Loud Spectrum, CA, USA (Remote)', 'Overseeing project execution, team collaboration, and client delivery across ecommerce software development projects.', '#'),
('Aug 2022 - Present', 'WordPress Developer', 'Medical Terpenes, CA, USA (Remote)', 'Resolved 200+ technical issues, improved performance by 60%, and led a team of 8 to successfully deliver a new eCommerce platform.', '#'),
('Feb 2022 - Jun 2022', 'Software Developer', 'Docua, Japan (Remote)', 'Developed a note management system with Laravel and API testing via Postman, increasing efficiency by 60%. Also authored the user manual and conducted QA testing.', '#'),
('Nov 2020 - Jan 2022', 'PHP Developer', 'Nitibdev IT Solutions, Philippines (Remote)', 'Designed and deployed an HR Management System using LAMP stack, reducing manual input by 80% and boosting efficiency by 50%.', '#');

-- Insert Technologies
INSERT INTO technologies (name, experience, duration, icon) VALUES
('Python', 90, 4, 'FaPython'),
('TensorFlow', 15, 3, NULL),
('JavaScript', 80, 3, NULL),
('Laravel', 75, 2, NULL),
('React', 50, 2, NULL),
('WordPress', 75, 3, NULL),
('PHP', 90, 4, NULL),
('Tailwind CSS', 80, 2, NULL),
('MySQL', 75, 3, NULL);