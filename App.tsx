// Importing the React library, which allows us to create components in the React framework
import React from 'react';
// Importing the main navigation component of the application
import AppNavigation from './src/navigator/AppNavigation';

// Defining the main function component of our application named App
function App() {
  // Returning the JSX (JavaScript XML) code that represents the structure of our application
  // In this case, we are rendering the main navigation component
  return <AppNavigation />;
}

// Exporting the App component as the default export, making it available for other parts of the application to import and use
export default App;
