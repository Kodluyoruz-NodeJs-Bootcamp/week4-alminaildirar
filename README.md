# **🔐Auth with JWT and Session**

In this project, there are login, register, home and dashboard pages. The user is directed to login after registration. If the user performs a successful login, session and jwt are generated, where the userid and browser information of the user are kept. This information is verified before the user is directed to the dashboard page. Users who are not logged in do not have permission to see the dashboard page. Users can update their profile, delete their account.

## **🔎 Technologies**

- Node.js
- Express.js
- Typescript
- TypeORM
- MySQL
- Ejs

## 🗺️ Project Files Map

```makefile
w4
|--- node_modules
|--- public                                // Place of my images and css files 
|--- src                                   // Place of my Typescript codes
|     |--- controllers                     // Place where my controllers are stored
|     |      |--- pageController.ts        // getIndexPage, getRegisterPage, getLoginPage functions are stored
|     |      |--- userController.ts        // createUser, loginUser, logoutUser, getDashboardPage, editUser, deleteUser functions are stored
|     |--- entity                          // Place where my database models are stored
|     |      |--- Session.ts               // Database model for sessions
|     |      |--- User.ts                  // Database model for users
|     |--- middlewares                     // Place of my middlewares
|     |      |--- auth.ts                  // This is used to check auth permissions(jwt and sessions) before get dashboard
|     |      |--- checkAlreadyLogin.ts     // This is used to if the user is already logged in to prevent it from being able to go to login page via url.
|     |      |--- loginValidator.ts        // This is used yo check errors for login 
|     |      |--- registerValidator.ts     // This is used to check errors for register 
|     |      |--- editValidator.ts
|     |--- migration                       // Place where my migrations are stored
|     |--- routes                          // Place of my routes
|     |      |--- pageRoute.ts             // Routes for get home,login and register pages
|     |      |--- userRoutes.ts            // Routes for register login POST, logout, get dashboard page, edit users profile and delete users account process
|     |--- index.ts                        // Start of my application
|--- views                                 // Place where my ejs files are stores
|     |--- partials  
|     |      |--- _header.ejs              // Header part of my ejs
|     |--- 500.ejs                         // Error page
|     |--- dashboard.ejs                   // Dashboard page
|     |--- index.ejs                       // Home page 
|     |--- login.ejs                       // Login page
|     |--- register.ejs                    // Register page
|     |--- edit.ejs                        // Edit Page
|--- .env                                  // Text configuration file for controlling my Applications environment constants
|--- .gitignore                            // standard gitignore file
|--- ormconfig.json                        // ORM and database connection configuration
|--- package-lock.json                     // a large list of each dependency listed in my package.json
|--- tsconfig.json                         // TypeScript compiler options
|--- package.json                          // node module dependencies
|--- README.md                             
```
## 💫 Added Features

- User can edit its profile (firstname, lastname and username).
- User can delete its account.

## Getting Started

### ⚙️**Installation**

```makefile
git clone gh repo clone Kodluyoruz-NodeJs-Bootcamp/week4-alminaildirar
cd week4-alminaildirar
npm install

```
Modify .env file like this;
```makefile
TOKEN_SECRET = <secret key for jwt>
SESSION_SECRET =  <secret key for session>
PORT = <port number>
```
After these steps; setup database settings inside ‘ormconfig.json’ file.

For run;

 ```makefile
npm run build
npm start
```

## 📷 Screenshots

Users in my MySQL database

![MySQL-users](https://user-images.githubusercontent.com/55828986/150692915-e4e55614-43cc-404c-a1e0-28b278c56cfb.png)

Session data in my MySQL database

![MySQL-session](https://user-images.githubusercontent.com/55828986/150693038-c949b188-d983-4742-9f50-71f58c54975b.png)

Session and jwt informations

![session-jwtinfo2](https://user-images.githubusercontent.com/55828986/150693072-384cf15e-2a4b-4a40-89ef-0f3e49c74e5d.png)

![browser-jwt](https://user-images.githubusercontent.com/55828986/150693104-1e665cf9-e338-4a59-8254-2b74a76781c0.png)


## 📹 Demo Video

https://user-images.githubusercontent.com/55828986/151683312-077fedaa-a4cf-4616-a696-5ea50dcd69c1.mp4

