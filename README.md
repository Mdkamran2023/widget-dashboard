# Dynamic Dashboard with Widgets

This project is a dynamic dashboard application built with React and Redux, allowing users to manage categories and widgets. Users can add, remove, and search for widgets across different categories.

## Features

- **Dynamic Categories**: Users can add and remove categories dynamically.
- **Widget Management**: Each category can contain multiple widgets. Users can add and remove widgets within a category.
- **Search Functionality**: Users can search for widgets by name, and the dashboard updates to show only matching widgets.
- **State Persistence**: The application uses `redux-persist` to ensure that the dashboard's state is maintained across page refreshes.

## Project Structure

- **`src/`**: The main source directory for the project.
  - **`components/`**: Contains all the React components used in the application.
    - **`Dashboard.js`**: The main component that displays categories and their widgets.
    - **`AddWidget.js`**: A component that allows users to add widgets to a specific category.
    - **`Widget.js`**: A component that displays an individual widget with a remove button.
    - **`SearchBar.js`**: A component that allows users to search for widgets by name.
  - **`utils/`**: Contains utility files and configuration.
    - **`store.js`**: The Redux store configuration with `redux-persist` for state persistence.
    - **`widgetsSlice.js`**: The Redux slice for managing categories and widgets.
    - **`dashboardConfig.json`**: A JSON file that defines the initial categories and widgets.
  - **`App.js`**: The main application file that sets up the Redux provider and renders the dashboard.
  - **`App.css`**: The global CSS file for styling the application.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/your-username/dynamic-dashboard.git
   cd dynamic-dashboard
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**:
   \`\`\`bash
   npm start
   \`\`\`

4. **Open the application in your browser**:
   The application will be available at `http://localhost:3000`.

## Usage

### Adding a Category

1. Enter a category name in the "New Category Name" input field.
2. Click the "Add Category" button to add the category to the dashboard.

### Adding a Widget

1. Under each category, you'll see an option to add a widget.
2. Enter the widget name and content.
3. Click "Add Widget" to add the widget to the category.

### Removing a Widget

1. Each widget has a remove (×) button.
2. Click the button to remove the widget from the category.

### Searching for Widgets

1. Use the search bar at the top of the dashboard to search for widgets by name.
2. The dashboard will automatically update to show only the categories containing widgets that match the search term.

## State Persistence

The application uses `redux-persist` to save the Redux state to `localStorage`. This means that any changes made to the categories or widgets will persist even after refreshing the page.

## Customization

### Initial Categories and Widgets

You can modify the initial categories and widgets by editing the `dashboardConfig.json` file in the `utils/` directory. This file defines the initial structure of the dashboard.

### Styling

Global styles can be modified in the `App.css` file. Each component also has its own CSS file for more specific styling.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **redux-persist**: A library to persist and rehydrate a Redux store.
- **@reduxjs/toolkit**: The official, recommended way to write Redux logic.
- **react-redux**: Official React bindings for Redux.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contributions

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Contact

For any inquiries or questions, please reach out to [mdkamran0109@gmail.com](mailto:mdkamran0109@gmail.com).
