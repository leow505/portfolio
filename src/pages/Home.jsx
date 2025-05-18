import { Navbar } from "@/components/Navbar"

export const Home = () => {
    return <div>
        <Navbar />
        <main className="pt-20">
        <section id="home" className="min-h-screen bg-gray-100 flex justify-center items-center">
        <h1 className="text-4xl font-bold">Home</h1>
        </section>
        <section id="about" className="min-h-screen bg-gray-200 flex justify-center items-center">
        <h2 className="text-3xl">About</h2>
        </section>
        <section id="projects" className="min-h-screen bg-gray-300 flex justify-center items-center">
        <h2 className="text-3xl">Projects</h2>
        </section>
        <section id="contact" className="min-h-screen bg-gray-400 flex justify-center items-center">
        <h2 className="text-3xl">Contact</h2>
        </section>
    </main>;
    </div>
}