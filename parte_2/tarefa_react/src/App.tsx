import React, { useState } from 'react';
import { Container, Button, TextField, List, ListItem, ListItemText, Checkbox } from '@mui/material';

interface Task {
  name: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  function addTask() {
    if (newTask !== '') {
      setTasks(tasks.concat({ name: newTask, completed: false }));
      setNewTask('');
    }
  };

  function TaskCompleted(index: number) {
    const updatedTasks = []
    for (var i = 0; i < tasks.length; i++) {
      if (i === index) {
        updatedTasks.push({
          name: tasks[i].name,
          completed: !tasks[i].completed
        });
      } else {
        updatedTasks.push(tasks[i]);
      }
    }
    setTasks(updatedTasks);
  }

  function getFilterTask() {
    const filterTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (showCompleted && tasks[i].completed) {
        filterTasks.push(tasks[i]);
      } else if (!showCompleted) {
        filterTasks.push(tasks[i]);
      }
    }
    return filterTasks;
  }

  const taksFilter = getFilterTask();

  return (
    <Container>
      <h1 style={{textAlign:"center"}}>Lista de Tarefas</h1>
      <TextField
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova Tarefa"
        fullWidth
      />
      <Button onClick={addTask} variant="contained" color="primary" style={{ marginTop: 16 }}>
        Adicionar Tarefa
      </Button>
      <List>
        {taksFilter.map((task, index) => (
          <ListItem key={index}>
            <Checkbox
              checked={task.completed}
              onChange={() => TaskCompleted(index)}
            />
            <ListItemText
              primary={task.name}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
      <Button
        onClick={() => setShowCompleted(!showCompleted)}
        variant="outlined"
        color="secondary"
        style={{ marginTop: 16 }}
      >
        {showCompleted ? 'Mostrar Todas Tarefas' : 'Mostrar Apenas Concluídas'}
      </Button>
    </Container>
  );
}

export default App;

