# Vatsal Mehta - Portfolio Website

A modern, responsive portfolio website built with Flask showcasing the professional experience, skills, and projects of Vatsal Mehta - Senior Python Developer.

## 🎨 Two Different Portfolio Styles

This project includes **two completely different portfolio designs**:

### 🌟 Vatsal1 (`/vatsal1`)
- **Style**: Modern gradient design with full-width layout
- **Theme**: Light background with colorful gradients
- **Navigation**: Top navigation bar
- **Layout**: Traditional single-page scrolling design
- **Features**: Hero section, timeline experience, skill badges, project cards

### 🌙 Vatsal2 (`/vatsal2`)
- **Style**: Minimalist dark theme with sidebar navigation
- **Theme**: Dark background with accent colors
- **Navigation**: Fixed sidebar with smooth transitions
- **Layout**: Section-based navigation with smooth transitions
- **Features**: Floating elements, skill bars, modern cards, dark aesthetics

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and form handling
- **Professional Sections**: 
  - Hero section with personal introduction
  - About section with professional summary
  - Work experience timeline
  - Skills showcase
  - Projects portfolio
  - Achievements and awards
  - Contact form
- **AWS & Cloud Expertise**: Highlights extensive AWS experience
- **Data Science Focus**: Showcases ML and data engineering skills

## 🛠️ Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Bootstrap 5, Custom CSS
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

## 🚀 Installation & Setup

1. **Clone or download the project**
   ```bash
   # If you have git installed
   git clone <repository-url>
   cd portfolio_website
   ```

2. **Create a virtual environment (recommended)**
   ```bash
   # On Windows
   python -m venv venv
   venv\Scripts\activate

   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000` to view your portfolio website.
   
   **Available Portfolio Styles:**
   - **Vatsal1**: `http://localhost:5000/vatsal1` - Modern gradient design
   - **Vatsal2**: `http://localhost:5000/vatsal2` - Minimalist dark theme

## 📁 Project Structure

```
portfolio_website/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
├── templates/
│   ├── index.html        # Vatsal1 HTML template
│   └── vatsal2.html      # Vatsal2 HTML template
├── static/
│   ├── css/
│   │   ├── style.css     # Vatsal1 styles (modern gradient)
│   │   └── vatsal2.css   # Vatsal2 styles (dark theme)
│   └── js/
│       ├── script.js     # Vatsal1 JavaScript
│       └── vatsal2.js    # Vatsal2 JavaScript
└── resumes/
    └── vatsal.txt        # Resume data source
```

## 🎨 Customization

### Personal Information
Edit the `personal_info` dictionary in `app.py` to update:
- Name, title, and contact information
- Social media links
- Professional summary

### Work Experience
Modify the `work_experience` list in `app.py` to add or update:
- Job titles and companies
- Duration and location
- Key achievements and responsibilities

### Skills
Update the `skills` dictionary to organize your skills by category:
- Programming Languages
- Cloud Services
- Data Science & ML
- Web Development
- Databases & Tools
- DevOps & Tools

### Projects
Add your projects to the `projects` list with:
- Project title and date
- Description and key features
- Technologies used

### Achievements
Update the `achievements` list with your awards and accomplishments.

## 🌟 Key Features Explained

### 1. Hero Section
- Gradient background with animated text
- Professional introduction
- Call-to-action buttons
- Social media links

### 2. Timeline Experience
- Visual timeline for work experience
- Hover effects and animations
- Detailed achievement lists

### 3. Skills Showcase
- Categorized skill display
- Interactive skill badges
- Hover animations

### 4. Project Portfolio
- Project cards with descriptions
- Technology tags
- Feature lists

### 5. Contact Form
- Functional contact form
- Form validation
- Success/error notifications

## 🔧 Configuration

### Environment Variables
You can add environment variables for production deployment:
```bash
export FLASK_ENV=production
export FLASK_DEBUG=0
```

### Production Deployment
For production deployment, consider:
- Using a production WSGI server (Gunicorn, uWSGI)
- Setting up a reverse proxy (Nginx)
- Configuring environment variables
- Setting up SSL certificates

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎯 Performance Features

- Optimized images and assets
- Minified CSS and JavaScript
- Lazy loading for better performance
- Smooth animations and transitions

## 🔒 Security

- Form validation and sanitization
- CSRF protection (can be added)
- Secure headers (can be configured)

## 📈 Analytics

You can add Google Analytics or other tracking tools by:
1. Adding the tracking code to the HTML template
2. Configuring your analytics account
3. Testing the implementation

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support or questions:
- Email: vvatsalmehta3009@gmail.com
- LinkedIn: [Vatsal Mehta](https://www.linkedin.com/in/vatsal-mehta-a7a1a7197)
- GitHub: [vatsalmehta-3009](https://github.com/vatsalmehta-3009)

## 🚀 Future Enhancements

Potential improvements for the future:
- Blog section
- Dark/Light theme toggle
- Multi-language support
- Portfolio gallery
- Testimonials section
- Downloadable resume
- Integration with external APIs
- Admin panel for content management

---

**Built with ❤️ by Vatsal Mehta** 