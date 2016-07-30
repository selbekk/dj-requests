import express from 'express';
import handlebars from 'express-handlebars';
import http from 'http';
import path from 'path';

// Refactor out
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import createStore from './stores/create-store';
import { routes } from './routes';

const app = express();

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.set('port', process.env.PORT || 4000);

app.use('/assets', express.static(path.join(__dirname, '..', '/dist')));

app.get('*', (req, res) => {
    match({ routes, location: req.url }, (err, redirectLocation, props) => {
        if(err) {
            console.error('ERROR: ', err);
            return res.status(500).json(err);
        }

        if(redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        if(!props) {
            return res.sendStatus(404);
        }

        const store = createStore();

        const markup = renderToString(
            <Provider store={store}>
                <RouterContext {...props} />
            </Provider>
        );
        const state = JSON.stringify(store.getState());
        return res.render('index', { markup, state });
    });
});

const server = http.createServer(app);

server.listen(3000);
server.on('listening', () => {
  console.log('Listening on port 3000');
});
