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
      tasks: []
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

    this.delete('/lista-de-tarefas/:id', (schema, request) => {
      const id = parseInt(request.params.id, 10);
      schema.db.tasks.remove(id);

      return new Response('', { status: 204 });
    })

    this.patch('/lista-de-tarefas/:id', (schema, request) => {
      const id = request.params.id;
      const attrs = JSON.parse(request.requestBody);

      const task = schema.db.tasks.update(id, attrs);

      return task;
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
