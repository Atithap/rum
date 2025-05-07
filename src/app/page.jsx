import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <div className="flex-grow text-center p-10">
          <h3 className="text-5xl">Dashboard</h3>
          <p className="text-2xl mt-5">
            Welcome to the dashboard! This is a simple dashboard layout using
            Next.js and Tailwind CSS.
          </p>
        </div>
        <Footer />
      </Container>
    </main>
  );
}
