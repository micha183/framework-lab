import Image from 'next/image'
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <title>Jacob Michaels Portfolio</title>
      <link rel="icon" href="/favicon.ico"></link>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyjacob</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-cyan-100 text-black px-4 py-2 rounded-md ml-8" 
                     href="https://www.linkedin.com/in/jacob-michaels/">LinkedIn</a></li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Jacob Michaels</h2>
            <h3 classname="text-2xl py-2">Developer and designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Data Analyst and BI Designer for 
              Little Caesars, Student at MSU 
              est. Grad Date of June 2023.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
            </div>
          </div>
          <div className="text-center p-10">
            <p className="text-md py-5 leading-8 text-gray-800">
              This React app was created using the Next.js framework
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
