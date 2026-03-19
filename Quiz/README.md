# Quiz-Game

A modern, responsive web-based Quiz game project with multiple subjects including Computer Science, Mathematics, and Physics. Built with HTML, CSS, and JavaScript, featuring a professional design and accessibility improvements.

## Overview

This project implements multiple subject quizzes with individual quiz pages for each subject and a professional landing page. It was developed as a college project with a focus on clean code, responsive design, and user experience.

## Features

- 🎯 Multiple interactive quizzes (Computer Science, Math, Physics)
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern gradient UI with smooth animations
- ♿ Accessibility-friendly HTML structure
- 💾 Client-side quiz logic with instant feedback
- 📝 Feedback form for user input
- 🏠 Professional landing page (index.html)
- 📄 MIT License included

## Tech Stack

```
HTML5        - Semantic markup with accessibility features
CSS3         - Responsive design with gradients and animations
JavaScript   - Quiz logic, event handling, and scoring
```

## Project Structure

```
index.html                # Landing page (open this first!)
IMPROVEMENTS.md           # Detailed changes and improvements
LICENSE                   # MIT License

Quiz/
  ├─ quiz.html           # Quiz subject selection page
  ├─ quiz.css            # Styles for quiz pages
  ├─ computer.html       # Computer Science quiz
  ├─ computer.css
  ├─ computer.js
  ├─ computer1.html      # Computer Science intro (with details)
  ├─ computer1.css
  ├─ math.html           # Math quiz
  ├─ math.css
  ├─ math.js
  ├─ math1.html          # Math intro
  ├─ math1.css
  ├─ physic.html         # Physics quiz
  ├─ physic.css
  ├─ physic.js
  ├─ physic1.html        # Physics intro
  ├─ physic1.css
  ├─ about.html          # About Us page
  ├─ about.css
  ├─ form.html           # Feedback form
  ├─ form.css
  ├─ connect.php         # Optional PHP backend (for submissions)
  └─ README.md           # This file

image/
  └─ computer1.avif      # Subject images
```

## How to Run

### Option 1: Static (No Server Required)

1. **Simple Method**: Double-click `index.html` in File Explorer or drag it into your browser
2. The landing page will open with navigation to all quizzes
3. Click "Start Quiz" to begin or select a specific subject

### Option 2: Using Python (If Installed)

Open PowerShell in the project root folder:

```powershell
# Serve the project on http://localhost:8000
python -m http.server 8000

# Then open in browser:
# http://localhost:8000/index.html
```

### Option 3: PHP Built-in Server (For Form Submissions)

```powershell
# Change to project directory
cd path\to\college project

# Serve on http://localhost:8000
php -S localhost:8000

# Then open:
# http://localhost:8000/index.html
```

## Features Explained

### Landing Page (index.html)

- Professional introduction to the quiz platform
- Quick access to all quizzes
- Feature highlights
- Responsive layout for all devices

### Quiz Pages

- Clean, modern interface with gradient backgrounds
- Real-time score tracking
- Instant feedback (green for correct, red for incorrect)
- Play again functionality
- Mobile-friendly button sizes

### Feedback Form

- Properly labeled form fields
- Email validation
- Phone number field
- Message textarea for detailed feedback
- Connected to optional PHP backend

### About Page

- Project information
- Quiz platform benefits
- Links to quizzes and feedback

## Design Highlights

- **Color Scheme**: Modern purple gradient (#667eea to #764ba2)
- **Responsive**: Optimized for mobile (480px), tablet (768px), and desktop
- **Animations**: Smooth hover effects and transitions
- **Typography**: Professional sans-serif font stack
- **Accessibility**: Semantic HTML, proper labels, focus states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Recent Improvements (v2.0)

See [IMPROVEMENTS.md](../IMPROVEMENTS.md) for detailed list of all improvements including:

- HTML structure fixes
- CSS modernization
- Responsive design implementation
- Accessibility enhancements
- New landing page
- MIT License addition

## Testing the Quiz

1. Open `index.html` in your browser
2. Click "Start Quiz" button
3. Select a subject (Computer, Math, or Physics)
4. Read the introduction and click "START QUIZ"
5. Answer all questions and view your final score
6. Use "Play Again" to restart the quiz

## Form Submission

If using the PHP backend:

1. Navigate to Feedback page from navigation menu
2. Fill out the feedback form
3. Click Submit
4. Your feedback will be processed by `connect.php`

## Notes for Contributors

- **Code Style**: Use consistent indentation (2 spaces)
- **CSS**: Keep styles organized by component
- **JavaScript**: Add comments for complex logic
- **Responsive**: Test on multiple screen sizes
- **Accessibility**: Use semantic HTML and proper ARIA attributes

## Future Enhancements

- [ ] Add score history/analytics
- [ ] Implement user authentication
- [ ] Add more quizzes for different subjects
- [ ] Create admin panel for quiz management
- [ ] Add progress indicators
- [ ] Implement difficulty levels
- [ ] Add timer functionality
- [ ] Create leaderboard system

## License

This project is licensed under the MIT License - see [LICENSE](../LICENSE) file for details.

## Project Information

- **Type**: College Project
- **Purpose**: Educational quiz platform
- **Status**: Completed with modern improvements
- **Last Updated**: March 2026

## Support & Feedback

- Report issues by adding them to the project
- Contribute improvements via pull requests
- Provide feedback using the feedback form in the application

---

**Happy Learning! 🎓**
