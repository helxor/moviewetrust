import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyle from './utils/globals';
import App from './containers/App';

import '../node_modules/react-modal-video/scss/modal-video.scss';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Helmet>
          <title>moviewetrust.tk - stream and download movies for free </title>
          <meta
            name="description"
            content="A moviewetrust.tk where you can check all your favorite movies and stream it and download it for free"
          />
          <link rel="canonical" href="https://moviewetrust.tk" />
        </Helmet>
        <App />
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);
