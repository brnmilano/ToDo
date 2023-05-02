import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createServer, Model } from 'miragejs';
import { routes } from './routes/routes';
import { ThemeProvider } from '@emotion/react';
import './styles/index.scss';

createServer({
  models: {
    task: Model,
  },

  seeds(server) {
    server.db.loadData({
      tasks: [
        {
          id: 1,
          addTask: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod velit eget sapien bibendum, sit amet sollicitudin turpis efficitur. Sed at mollis felis. Donec cursus consectetur velit ac tristique.',
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/lista-de-tarefas', () => {
      return this.schema.all('task');
    })

    this.post('/lista-de-tarefas', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('task', data);
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
