# Block explorer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), it's a simple demo purpose [Blocklet](https://www.arcblock.io/en/blocklets) that runs on [ABT Node](https://www.arcblock.io/en/platform).

## Run and debug locally

If you have not installed ABT Node locally, you can do it using the following: 
```shell
yarn global add @abtnode/cli
```
You can get more details from [Get started with ABT Node](https://www.arcblock.io/en/get-started) page or if you need help installing ABT Node. 

Clone the repo and start development using a debug mode ABT Node instance inside this project:
```shell
git clone https://github.com/vlasenkosa/block-explorer
cd block-explorer
yarn
abtnode init --mode debug
abtnode start
blocklet dev
``` 

## Learn more about ABT Node and Blocklet

* [ABT Node Overview](https://docs.arcblock.io/en/abtnode/introduction/abtnode-overview)
* [Get started with ABT Node](https://www.arcblock.io/en/get-started)
* [ABT Node CLI](https://docs.arcblock.io/en/abtnode/developer/abtnode-cli)
* [Blocklet Development Documents](https://docs.arcblock.io/en/abtnode/developer/blocklet-spec)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start:server`

Runs the app server in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `yarn start:client`

Runs the app client part in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn bundle`

Runs the building blocklet.\

### `yarn bundle`

Runs the building blocklet and deploy it to your local ABT Node.\

### Hashs for testing

` 00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa `