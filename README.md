# Recipes Chest - A Chest of Yummy Recipes

A Front end of the application in which I used my own API to fetch recipes. Built with React, JavaScript, CSS3, and HTML5.

## Installation and Setup Instructions

I used the Create React build tool for the development of this project. To install CRA, run the following command in your terminal:

```bash
npx create-react-app .
```

To run the CRA server, use the following command:

```bash
npm start
```

You can visit the App at:
https://recipe-chest-fronend.onrender.com/

## Technology Used

Front-End :

- HTML5
- CSS3 (Flexbox)
- Javascript
- React.JS

## User Stories

- Users can Create a recipe using Create recipe option
- Users can See the available recipes and their details
- Users can edit/Update a recipe
- Users can delete a recipe
- Users can search for recipes by entering the ingredients they have available at home.

## Sketches

Home : ![Alt text](./public/Home.png/200x200)
Show: ![Alt text](./public/show-page.png/200x200)

## UI

Application : ![Alt text](./public/UI.png/200x200)

## Description

This was the final project at the Software Engineering Bootcamp. The project's goal included using all the technologies learned during the Bootcamp and implement a Full Stack CRUD application.

My goal was to build a full-stack application that fetches data from my backend API and displays it in the frontend. I began this process by using the 'create-react-app' boilerplate with 'npx' and then incorporated 'BrowserRouter' from the 'react-router-dom' library. 'BrowserRouter' was used to ensure that my UI stays synchronized with the URL. I added the 'Link' element in my Navbar to set the URL and track the browsing history. To maintain clean and organized code, I divided the project into various components and pages. Lastly, I employed Axios to make XMLHTTP requests for data retrieval and implemented CRUD functionalities. I utilized the 'useEffect' and 'useState' hooks to fetch and store the data.

In addition, I integrated a recipe finder feature that utilizes a third-party recipe API. Users can search for recipes by inputting the available ingredients in their pantry, and the API will retrieve recipes based on the provided ingredients."

One of the main challenges I encountered was when I uploaded my frontend to render.com. I kept receiving an error message stating that my database string was invalid. Troubleshooting this error was time-consuming, but I eventually discovered that the issue was related to the environment variable settings on render.com. After correcting the environment variable, the problem was resolved
Another challenging task for me was to create a design that is visually appealing and modern to users. After spending a considerable amount of time researching online and studying other people's designs, I came up with an idea for my project's UI design. I used a Paint application to create my initial design and found the color scheme for my project on colorhunt.com
Furthermore, I encountered an issue related to converting a string into an array after receiving a list of ingredients from an input field. My ingredient field in my Model is an array, but the input field only provides data in string format. This required me to convert the data from a string to an array in React and then store it in the database. This process proved to be quite challenging. After conducting research on the internet and reading through similar problems on Stack Overflow, I managed to resolve the issue by performing type casting on the variable.

In summary, the technologies implemented in the front-end part of the project are React, React-Router, and a significant amount of Vanilla JavaScript, JSX, Axios, and CSS3. I chose to use the Create React App boilerplate to minimize initial setup and invest more time in exploring various technological aspects.

## Future Enhancements:

In the next iteration, I plan to implement JWT authentication and authorization features. This will ensure that only authorized users can access their recipes, and I will also work on adding a login and signup feature.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

I would like to thank my instructor, Tishana Trainor, for assigning me this challenging project. I would also like to express my gratitude to Manara Ali for his assistance in creating this project and helping me resolve any issues I encountered along the way.
