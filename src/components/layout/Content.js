import React from 'react'
import { FaTasks } from 'react-icons/fa'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Tasks } from '../Tasks'

export const Content = () => {
 return (
  <div>
   <section className="content">
    <Sidebar />
    <Tasks />
   </section>
  </div>
 )
}
