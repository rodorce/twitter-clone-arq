# Principios SOLID

## Open Close Principle

Este principio se utiliza a lo largo de todo el proyecto ya que se crean multiples componentes cuyo comportamiento y estructura puede ser extendido
sin necesidad de actualizar el código fuente.

Claro ejemplo de esto es crear multiples instancias del componente IndividualTweet, donde se va instanciando dependiendo de las propiedades que queremos que tenga (información de un tweet en particular) y así no estamos duplicando código. Además hay casos en que un tweet puede tener replies, y en lugar
de generar toda esa responsabilidad de un nuevo tweet como respuesta en el componente IndividualTweet lo hacemos en el componente CommentTweet para así
poder aislar sus responsabilidades y solamente manejar en individual tweet la lógica de si un tweet tiene respuestas o no.

## Interface Seggregation Principle

Este principio es utilizado al momento que queremos pasar propiedades de un tweet a un nuevo componente, en lugar de pasar toda la información del tweet, solamente pasamos la que necesitamos para manejar la lógica del componente hijo. Este ejemplo claramente se da en el componente Home y Sidebar. El componente Home en lugar de pasarle todos los metadatos de la sesión de usuario al componente Sidebar, este solamente le envía el nombre del usuario y su username.

## Dependency Inversion Simple

Este principio se encuentra aplicado en nuestro componente Home y Feed donde la lógica de llamada de un API en lugar de manejarla en Home o Feed. La manejamos en un context de React de modo que si cambiamos la lógica de la llamada no va a ser necesario modificar nuestro componente porque este solamente se encarga de representar los datos en la UI. La función de llamada se la inyectamos a Feed por medio de nuestro React Context.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
