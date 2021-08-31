import React, { Component } from "react"

import NewTaskForm from "./components/NewTaskForm"
import TaskList from "./components/TaskList"
import Footer from "./components/Footer"

import { ACTIVE, COMPLETED } from "./constants"
import { MOCK_CREATED } from "./constants"

class App extends Component {
  state = {
    tasks: [
      {
        id: `${Date.now()}-Active`,
        desc: "Active",
        created: MOCK_CREATED,
        mod: ACTIVE,
      },

      {
        id: `${Date.now()}-Completed`,
        desc: "Completed",
        created: MOCK_CREATED,
        mod: COMPLETED,
      },

      {
        id: `${Date.now()}-Editing`,
        desc: "Editing",
        created: MOCK_CREATED,
        mod: ACTIVE,
      },
    ],
  }

  toggleCompleted = (id) => {
    const toggledTask = this.state.tasks.find((task) => task.id === id)
    toggledTask.mod = toggledTask.mod === ACTIVE ? COMPLETED : ACTIVE
    this.setState((state) => {
      return {
        tasks: [...state.tasks],
      }
    })
  }

  deleteTask = (id) => {
    this.setState((state) => {
      return {
        tasks: state.tasks.filter((task) => task.id !== id),
      }
    })
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>

        <section className="main">
          <TaskList
            list={this.state.tasks}
            onToggleCompleted={this.toggleCompleted}
            onDeleteTask={this.deleteTask}
          />
          <Footer />
        </section>
      </section>
    )
  }
}

export default App
