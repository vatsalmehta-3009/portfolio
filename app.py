from flask import Flask, render_template, request, jsonify
import os
from utils.send_email import send
from utils.config import FROM_MAILS
from utils.email_template import ContactEmailTemplate

app = Flask(__name__)

# Personal information
personal_info = {
    'name': 'VATSAL MEHTA',
    'title': 'Senior Python Developer',
    'email': 'vvatsalmehta3009@gmail.com',
    'phone': '9106245935',
    'location': 'Surat, India',
    'linkedin': 'https://www.linkedin.com/in/vatsal-mehta-a7a1a7197',
    'github': 'https://github.com/vatsalmehta-3009',
    'whatsapp': 'https://wa.me/919106245935',
    'summary': 'Experienced Senior Python Developer with expertise in AWS cloud services, data engineering, and full-stack development. Passionate about building scalable solutions and mentoring teams.'
}

# Work experience
work_experience = [
    {
        'title': 'Senior Python Developer',
        'company': 'Thinkbiz Technologies',
        'duration': '02/2022 - Present',
        'location': 'Ahmedabad',
        'description': 'A Marketing Product',
        'achievements': [
            'Designed Full Data Fetching Flow via Twitter API with AWS CloudFormation, Step Functions, Lambda, S3, RDS(PostgreSQL), Redshift, CloudWatch',
            'Designed External Tables Data import using Redshift Spectrum Tables for client data import from CSV to tables flow',
            'Prepared utility State Machines for running large time-taking queries',
            'Performed heavy data wrangling operations using pandas',
            'Prepared Metabase dashboards for clients and APIs using API Gateway and FastAPI',
            'Used WSL, Linux commands and AWS CLI for development',
            'Prepared ETL workflow using State machines and deployed through CloudFormation',
            'Well versed with Git commands like rebase, revert, stash',
            'Prepared Intern Training Programme and supervised training interns',
            'Wrote extensive Pytests for local code testing'
        ]
    },
    {
        'title': 'Python Teacher/Freelancer',
        'company': 'Mount Litera Zee School',
        'duration': '05/2021 - 02/2022',
        'location': 'Surat',
        'description': 'Python Programming Instructor',
        'achievements': [
            'Taught Python programming to students',
            'Developed curriculum and learning materials',
            'Provided hands-on coding experience'
        ]
    }
]

# Education
education = [
    {
        'degree': 'Bachelor of Information Technology',
        'institution': 'Parul University',
        'duration': '06/2017 - 04/2021',
        'details': 'CGPA: 6.89'
    },
    {
        'degree': 'Data Science and Machine Learning for Professionals',
        'institution': 'Skillslash',
        'duration': '07/2021 - 04/2022',
        'details': 'Online Course - Bangalore'
    }
]

# Skills
skills = {
    'Programming Languages': ['Python'],
    'Cloud Services': [
        'AWS Step Functions', 'AWS Lambda', 'AWS CloudFormation', 
        'AWS Redshift', 'AWS S3', 'AWS RDS', 'AWS API Gateway', 
        'AWS CloudWatch', 'AWS Redshift Spectrum'
    ],
    'Data Science & ML': ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    'Web Development': ['Django', 'Flask', 'FastAPI'],
    'Databases & Tools': ['SQL', 'PostgreSQL'],
    'DevOps & Tools': ['Git', 'Ubuntu CLI', 'Selenium', 'Docker']
}

# Projects
projects = [
    {
        'title': 'Birthday Extractor',
        'date': '02/2022',
        'description': 'Automated birthday management system',
        'features': [
            'Extract birthday messages from WhatsApp Family group',
            'Process to get CSV with birthdates and names',
            'Post birthdays to calendar via Calendar API'
        ],
        'technologies': ['Python', 'WhatsApp API', 'Calendar API', 'CSV Processing']
    },
    {
        'title': 'Instagram Data Scraper',
        'date': '12/2022',
        'description': 'Social media automation tool',
        'features': [
            'Found user profiles related to particular hashtags',
            'DM periodically to all those profiles'
        ],
        'technologies': ['Python', 'Selenium', 'Instagram API']
    },
    {
        'title': 'Telegram Bot for School Management',
        'date': '12/2021',
        'description': 'Educational institution management system',
        'features': [
            'Registration of teachers',
            'Display time tables',
            'Assigning proxies'
        ],
        'technologies': ['Python', 'Telegram Bot API', 'Database Management']
    },
    {
        'title': 'Loan Default Prediction',
        'date': '11/2021',
        'description': 'Machine learning model for financial risk assessment',
        'features': [
            'Dealt with missing values and data cleaning',
            'Removed irrelevant features',
            'Built predictive model for loan defaults'
        ],
        'technologies': ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn']
    }
]

# Achievements
achievements = [
    'Gold Badge Holder on HackerRank in Python (10/2020)',
    'Silver Badge Holder on HackerRank in SQL (10/2020)',
    'Selected for State Level Hackathon (10/2019)',
    'Served as Sports Secretary at SMJV Vadodara (06/2019)',
    'Played National Table Tennis, Held at Indore (07/2019)'
]

# Languages
languages = [
    {'name': 'English', 'proficiency': 80},
    {'name': 'Hindi', 'proficiency': 80},
    {'name': 'Gujarati', 'proficiency': 80}
]

# Calculate total skills count
total_skills = sum(len(skill_list) for skill_list in skills.values())

# Create skills with levels for Vatsal2
skills_with_levels = {}
for category, skill_list in skills.items():
    skills_with_levels[category] = []
    for skill in skill_list:
        # Assign different levels based on skill importance
        if skill in ['Python', 'AWS Lambda', 'AWS S3', 'Pandas', 'Django', 'Flask', 'Git']:
            level = 95
        elif skill in ['AWS Step Functions', 'AWS CloudFormation', 'AWS Redshift', 'FastAPI', 'SQL']:
            level = 90
        elif skill in ['AWS RDS', 'AWS API Gateway', 'NumPy', 'Scikit-learn']:
            level = 85
        else:
            level = 80
        skills_with_levels[category].append({'name': skill, 'level': level})

@app.route('/')
def home():
    return render_template('index.html', 
                         personal_info=personal_info,
                         work_experience=work_experience,
                         education=education,
                         skills=skills,
                         projects=projects,
                         achievements=achievements,
                         languages=languages)

@app.route('/vatsal1')
def vatsal1():
    return render_template('index.html', 
                         personal_info=personal_info,
                         work_experience=work_experience,
                         education=education,
                         skills=skills,
                         projects=projects,
                         achievements=achievements,
                         languages=languages)

@app.route('/vatsal2')
def vatsal2():
    print("Skills with levels:", skills_with_levels)
    return render_template('vatsal2.html', 
                         personal_info=personal_info,
                         work_experience=work_experience,
                         education=education,
                         skills=skills_with_levels,
                         projects=projects,
                         achievements=achievements,
                         languages=languages,
                         total_skills=total_skills)

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        print("Contact form data:", data)
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Get email credentials
        email_config = FROM_MAILS.get('vvatsalmehta3009')
        if not email_config:
            return jsonify({'error': 'Email configuration not found'}), 500
        
        # Prepare email template variables
        template_vars = {
            'name': data['name'],
            'email': data['email'],
            'subject': data['subject'],
            'message': data['message']
        }
        
        # Send email
        send(
            sender=email_config['email'],
            app_password=email_config['pass'],
            recipient=email_config['email'],  # Send to yourself
            template=ContactEmailTemplate(),
            template_vars=template_vars
        )
        
        return jsonify({
            'success': True,
            'message': 'Thank you for your message! I will get back to you soon.'
        })
        
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return jsonify({
            'error': 'Sorry, there was an error sending your message. Please try again later.'
        }), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 