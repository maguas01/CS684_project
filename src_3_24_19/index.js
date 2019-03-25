import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import App from './components/App';
import rootSaga from './sagas';
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from "aws-amplify";
import config from "./config";
import 'bootstrap/dist/css/bootstrap.min.css';

 
const sagaMiddleware = createSagaMiddleware();



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	{
		loading:false,
		singleItem:[], 
		multipleItems:[],
    cartItems:[],
	},
	composeEnhancers(
		applyMiddleware(sagaMiddleware,logger)
	)
);

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  // Storage: {
  //   region: config.s3.REGION,
  //   bucket: config.s3.BUCKET,
  //   identityPoolId: config.cognito.IDENTITY_POOL_ID
  // },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});


// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware,logger),
// );

sagaMiddleware.run(rootSaga);

render(
	<Router>
	<Provider store={store}>
    	<App />
  	</Provider>
	</Router>,
  document.getElementById('root'),
);

 