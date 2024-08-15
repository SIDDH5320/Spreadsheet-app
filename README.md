
# Spreadsheet  Frontend Application

## Introduction
This project is a frontend application built with **Next.js** and **Tailwind CSS** that mimics the functionality of a spreadsheet. It features grid rendering, cell editing, basic cell formatting, and additional advanced functionalities like search, filter, undo/redo, and data validation. This project is designed to assess skills in frontend development, state management, and UI/UX design, focusing on performance, responsiveness, and code quality.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Core Functionality](#core-functionality)
- [Advanced Features](#advanced-features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Contributors](#contributors)
- [License](#license)

## Features

### Core Functionality
- **Grid Rendering**: Efficiently render a grid of 1000 blank cells with smooth scrolling and optimized performance.
- **Cell Editing**: Each cell is editable, allowing users to dynamically input and update cell content.
- **Data Storage**: All cell data is stored in memory using `zustand` for state management, ensuring persistence during interaction.
- **Styling**: Cells are styled to visually distinguish them, using grid lines, padding, and custom font styles.

### Advanced Features
- **Cell Formatting**: Supports basic formatting options such as text alignment (left, center, right) and font size adjustments.
- **Data Validation**: Basic validation to restrict specific cells to accept numeric values or certain text formats.
- **Search and Filter**: A feature that allows users to quickly locate specific data within the grid.
- **Pagination**: Efficient handling of large datasets through pagination or infinite scrolling.
- **Undo/Redo**: Functionality that allows users to revert changes made to the cells with undo and redo operations.

## Installation

1. Clone the repository:
    ```bash
    git clone [https://github.com/SIDDH5320/Spreadsheet-app.git]
    cd spreadsheet-mimic
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Open the application in your browser:
    ```
    http://localhost:3000
    ```

## Usage
Once the application is up and running, you will see a grid of 1000 blank cells. You can click on any cell to edit its content, format the text, validate data input, and utilize the search/filter feature for quick navigation. The undo/redo feature allows you to backtrack or revert changes efficiently.

## Core Functionality

### 1. **Grid Rendering**
The grid contains 1000 cells and is optimized for performance to ensure smooth scrolling and interaction. Tailwind CSS is used for styling, ensuring the cells are responsive and styled with grid lines, padding, and font.

### 2. **Cell Editing**
Each cell is individually editable, allowing the user to input and store data in memory via `zustand` state management. Changes made in any cell are dynamically reflected across the grid.

### 3. **Data Storage**
Data entered into each cell is managed with `zustand` to maintain state in memory, ensuring data persists while interacting with the grid.

### 4. **Cell Styling**
Grid cells are visually styled with clear grid lines and interactive elements, making the application closely resemble a traditional spreadsheet.

## Advanced Features

### 1. **Cell Formatting**
Users can align text to the left, center, or right, and adjust font sizes to customize the presentation of data within each cell.

### 2. **Data Validation**
Data validation is enforced for specific cells. For example, some cells may only accept numeric inputs or specific text patterns to ensure data integrity.

### 3. **Search and Filter**
A search and filter mechanism enables quick navigation through the grid, allowing users to easily locate specific data without manual scrolling.

### 4. **Pagination/Infinite Scrolling**
To handle large datasets efficiently, pagination or infinite scrolling is implemented to ensure smooth performance.

### 5. **Undo/Redo**
Users can undo and redo changes to revert any unwanted edits made to the grid.

## Dependencies
- **Next.js**: React framework for building the frontend.
- **Zustand**: For lightweight state management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: For providing a clean, modern user interface.

## Configuration
To customize the grid size or adjust settings related to pagination, search, or formatting, refer to the configuration files located in:
- `src/config/grid.js`
- `src/config/state.js`

These files allow for adjusting the grid size, formatting options, and pagination limits based on project requirements.

## Contributors
- [Your Name](https://github.com/SIDDH5320)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

This README provides an in-depth guide for users and contributors to understand, install, and utilize the project. Let me know if you'd like to modify or add specific details!
