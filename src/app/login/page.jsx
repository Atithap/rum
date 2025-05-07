import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Link from 'next/link'

function Loginpage() {




    return (
        <main>
        <Container>
            <Navbar />
            <div className="flex-grow text-center p-10">
            <h3 className="text-5xl">Login</h3>
            <p className="text-2xl mt-5">
                Welcome to the login page! Please enter your credentials to access your account.
            </p>
            <form className="mt-5">
                <input type="text" placeholder="Username" className="border p-2 m-2" />
                <input type="password" placeholder="Password" className="border p-2 m-2" />
                <button type="submit" className="bg-blue-500 text-white p-2 m-2">Login</button>
            </form>
            <p className="mt-5">
                Don't have an account? <Link href="/register" className='hover:underline text-blue-500'>Register here</Link>
            </p>
            </div>
            <Footer />
        </Container>
        </main>
    )

}

export default Loginpage