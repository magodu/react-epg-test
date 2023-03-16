# EPG dummy app

This project is created with React. To run it follow the following steps:

- Clone or download the repo into your local machine
- Install the dependencies with `npm install`
- Run the code with `npm run dev`

Note: this project also launch a mock express server. Ports 9000 and 3000 have to be available.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Also runs the mock server in the port 9000. This port can be modified in the mock-api/app.js server file.

Before to start the servers the script will update the mockdata to the present day.

The page will reload if you make edits.\ You will also see any lint errors in the console.

### `npm start`

Runs the app in the development mode. without launch the mock server. To launch it it´s necessary run in another terminal `npm run mock-api` as well.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run update:epg`

Updates the mock data

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

