import { Navbar } from "@/components/Navbar"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { MoreInfo } from "@/components/sections/MoreInfo"

export const Home = () => {
    return <div>
        <Navbar />
        <main className="dark:bg-gray-700">
            <div className="max-w-4xl mx-auto px-4">
                <About />
                <Projects />
                <MoreInfo />
            </div>
        </main>
    </div>
}