import React, { useEffect } from 'react'
import { useTasks } from '../hooks';
import { Checkbox } from './Checkbox'
import { collatedTasks } from '../constants'
import { useSelectedProjectsValue, useProjectsValue } from '../context'
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { AddTask } from './AddTask';

export const Tasks = () => {
 const { selectedProject } = useSelectedProjectsValue()
 const { tasks } = useTasks(selectedProject)
 const { projects } = useProjectsValue()
 let projectName = '';


 if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
  projectName = getTitle(projects, selectedProject).name

 }

 if (collatedTasksExist(selectedProject) && selectedProject) {
  projectName = getCollatedTitle(collatedTasks, selectedProject).name

 }

 useEffect(() => {
  document.title = `${projectName}: Todoist`;
 });

 return (
  <div className="tasks" data-testid="tasks">
   <h2 data-testid="project-name">{projectName}</h2>

   <ul className="tasks__list">
    {tasks.map((task) => (
     <li key={`${task.id}`}>
      <Checkbox id={task.id} taskDesc={task.task} />
      <span>{task.task}</span>
     </li>
    ))}
   </ul>
   <AddTask />
  </div>
 )
}
