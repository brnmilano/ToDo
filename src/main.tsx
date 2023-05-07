import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createServer, Model, Response } from 'miragejs';
import { routes } from './routes/routes';
import { ThemeProvider } from '@emotion/react';
import './styles/index.scss';
import { TasksProps } from './transactions';

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
      const storageData = localStorage.getItem('tasks')

      const storageDataVerify = storageData !== null && JSON.parse(storageData) as TasksProps[]

      let allTasks = [] as TasksProps[]

      if (storageDataVerify) {
        allTasks = [...storageDataVerify]
      }

      return new Response(200, {}, allTasks)
    })

    this.post('/lista-de-tarefas', (schema, request) => {
      const storageData = localStorage.getItem('tasks')

      const storageDataVerify = storageData !== null && JSON.parse(storageData) as TasksProps[]

      let allTasks = [] as TasksProps[]

      if (storageDataVerify) {
        allTasks = [...storageDataVerify]
      }

      const data = JSON.parse(request.requestBody);

      allTasks.push({
        id: allTasks.length === 0 ? 1 : allTasks[allTasks.length - 1].id + 1,
        addTask: data.addTask,
        isCompleted: data.isCompleted
      })

      localStorage.setItem('tasks', JSON.stringify(allTasks))

      return schema.create('task', data);
    })

    this.delete('/lista-de-tarefas/:id', (schema, request) => {
      const storageData = localStorage.getItem('tasks')

      const storageDataVerify = storageData !== null && JSON.parse(storageData) as TasksProps[]

      let allTasks = [] as TasksProps[]

      if (storageDataVerify) {
        allTasks = [...storageDataVerify]
      }

      const id = parseInt(request.params.id);
      const tasksFiltered = allTasks.filter(task => task.id != id)

      localStorage.setItem('tasks', JSON.stringify(tasksFiltered))

      schema.none

      return new Response(204, {});
    })

    this.patch('/lista-de-tarefas/:id', (schema, request) => {
      const storageData = localStorage.getItem('tasks')

      const storageDataVerify = storageData !== null && JSON.parse(storageData) as TasksProps[]

      let allTasks = [] as TasksProps[]

      if (storageDataVerify) {
        allTasks = [...storageDataVerify]
      }

      const id = parseInt(request.params.id);

      allTasks.forEach(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted
        }
      })

      localStorage.setItem('tasks', JSON.stringify(allTasks))

      schema.none
      return new Response(200, {});
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
