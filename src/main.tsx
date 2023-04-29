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
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod velit eget sapien bibendum, sit amet sollicitudin turpis efficitur. Sed at mollis felis. Donec cursus consectetur velit ac tristique.',
        },
        {
          id: 2,
          description: 'Duis efficitur eleifend mi, in dapibus sapien vestibulum sed. Proin convallis nulla ut lectus dapibus tristique.',
        },
        {
          id: 3,
          description: 'Mauris non elit non ex convallis bibendum sed in ipsum. Suspendisse rutrum, nisi non venenatis interdum, felis purus pellentesque elit, non fringilla risus augue nec leo. Duis sodales semper purus vel bibendum. Sed semper sapien sed purus porttitor, in faucibus odio venenatis. Nam at lobortis justo, nec venenatis metus.',
        },
        {
          id: 4,
          description: 'Nulla euismod, urna a lobortis varius, lacus mauris feugiat est, eget ultrices risus mauris nec nunc. Aenean imperdiet varius tortor ac iaculis. Sed a velit vel mi interdum aliquam. Sed euismod, magna sit amet dictum suscipit, massa sapien suscipit tortor, sed tincidunt sapien sapien eu nisl.',
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
