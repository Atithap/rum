import React from 'react'
import AdminNavbar from './components/AdminNavbar'
import Container from './components/Container'

function AdminHome() {
  return (
    <main>
      <Container>
        <AdminNavbar />
        <div className="flex-grow text-center p-10">
          <h3 className="text-5xl">Admin Dashboard</h3>
          <p className="text-2xl mt-5">
            Welcome to the admin dashboard! This is a simple dashboard layout using Next.js and Tailwind CSS.
          </p>
        </div>
      </Container>
    </main>
  )
}

export default AdminHome