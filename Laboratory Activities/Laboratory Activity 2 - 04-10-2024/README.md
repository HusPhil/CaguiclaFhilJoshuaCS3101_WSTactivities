# Laboratory Activity 2: Vision Board Website 🎯

## Overview
This laboratory activity involves creating a personal vision board website using HTML and CSS. The project focuses on layout design, image handling, and creative presentation of personal goals and aspirations.

## Key Features
- Responsive design
- Image gallery layout
- Custom styling with external CSS
- Interactive elements

## Technologies Used
- HTML5
- CSS3
- Image assets

## Key Syntax and Concepts Used

### HTML Structure
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="vision-board">
        <div class="vision-item">
            <!-- Vision board items -->
        </div>
    </div>
</body>
</html>
```

### CSS Grid/Flexbox Layout
```css
.vision-board {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.vision-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

## Project Structure
```
├── images/         # Contains vision board images
├── styles.css      # External CSS styling
├── visionboard.html # Main HTML file
└── README.md       # Project documentation
```

## Output
The final result is captured in `visionboard-output.gif`, showcasing an interactive and visually appealing vision board website.

## Learning Outcomes
- Implementing responsive layouts
- Working with external CSS files
- Image optimization and management
- Creating visually appealing web designs
