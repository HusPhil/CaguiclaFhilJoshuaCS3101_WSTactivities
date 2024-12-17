# Laboratory Activity 1: HTML Tables 📊

## Overview
This laboratory activity focuses on creating structured HTML tables to display a class schedule. The activity demonstrates the use of HTML tables and CSS styling to create an organized and visually appealing schedule layout.

## Key Features
- Interactive class schedule display
- Styled with CSS for better visual presentation
- Hover effects on table rows
- Color-coded schedule entries

## Technologies Used
- HTML5
- CSS3

## Key Syntax and Concepts Used

### HTML Table Structure
```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

### CSS Styling
```css
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}
```

## Output
The final output is saved as `html-tables-output.jpg`, showing a fully functional and styled class schedule.

## Learning Outcomes
- Understanding HTML table structure and semantics
- Implementing CSS styling for tables
- Creating responsive and interactive table designs
- Using CSS pseudo-classes for enhanced user experience
