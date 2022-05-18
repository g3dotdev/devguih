import type { NextPage } from 'next'
import Head from 'next/head'
import { yearsSinceDate } from '../utils/date'

import {
  BsEnvelope,
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsTwitch
} from "react-icons/bs";

const Home: NextPage = () => {
  const about = {
    name: 'Guilherme',
    role: 'Software Engineer',
    since: yearsSinceDate(new Date(2014, 8, 18)),
    from: 'Brazil',
    flag: '🇧🇷',
    currentJob: {
      name: 'ProjectMark',
      url: 'https://projectmark.com',
      role: 'Frontend Engineer',
    },
  }

  return (
    <>
      <Head>
        <title>Guilherme Souza</title>
      </Head>
      <div className="grid min-h-screen place-items-center p-6">
        <div className="flex flex-col space-y-3">
          <h1 className="text-5xl">Hi there, I&apos;m <span className="text-animated from-indigo-500 via-pink-500 to-indigo-500 font-medium">{ about.name }</span> 👋🏻!</h1>
          <h2 className="text-3xl">A { about.role } from <span className="text-animated from-lime-500 via-yellow-500 to-lime-500">{ about.from }</span> { about.flag } with { about.since } years of experience</h2>
          <p className="text-2xl">Currently working at <a href="about.currentJob.url" target="_blank" rel="noopener noreferrer"><span className="text-animated from-blue-700 via-cyan-500 to-blue-700">{ about.currentJob.name }</span></a> as { about.currentJob.role }</p>
          <div className="flex space-x-6 pt-2 text-2xl">
            <a href="mailto:devguih@gmail.com" target="_blank" rel="noopener noreferrer" title="Send an email">
              <BsEnvelope />
            </a>
            <a href="https://github.com/devguih" target="_blank" rel="noopener noreferrer" title="Github">
              <BsGithub />
            </a>
            <a href="https://twitter.com/devguih" target="_blank" rel="noopener noreferrer" title="Twitter">
              <BsTwitter />
            </a>
            <a href="https://instagram.com/devguih" target="_blank" rel="noopener noreferrer" title="Instagram">
              <BsInstagram />
            </a>
            <a href="https://linkedin.com/in/devguih" target="_blank" rel="noopener noreferrer" title="Linkedin">
              <BsLinkedin />
            </a>
            <a href="https://twitch.com/devguih" target="_blank" rel="noopener noreferrer" title="Twitch">
              <BsTwitch />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
