# Laboratory Activity 4: Personal Portfolio Page 🌟

## Overview
This laboratory activity focuses on creating a personal portfolio website that showcases skills, projects, and personal information. The project implements modern web design principles and interactive features.

## Key Features
- Responsive design
- Interactive navigation
- Project showcase section
- Contact information
- Dynamic content loading

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Custom assets and images

## Key Syntax and Concepts Used

### HTML Structure
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navigation">
        <!-- Navigation items -->
    </nav>
    <main>
        <section id="about">
            <!-- About section -->
        </section>
        <section id="projects">
            <!-- Projects showcase -->
        </section>
        <section id="contact">
            <!-- Contact information -->
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Interactivity
```javascript
// Smooth scrolling navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
```

### CSS Styling
```css
.project-card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
}
```

## Project Structure
```
├── assets/       # Images and other media
├── index.html    # Main HTML file
├── styles.css    # CSS styling
├── script.js     # JavaScript functionality
└── README.md     # Project documentation
```

## Output
The final portfolio website is demonstrated in `personal-page-output.gif`, showing the interactive features and responsive design.

## Learning Outcomes
- Creating responsive layouts
- Implementing smooth scrolling
- Managing project assets
- Adding interactive features
- Applying modern design principles
